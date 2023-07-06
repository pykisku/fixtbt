import { bookingsApi, catalogApi, teamApi } from '../../utils/square-client';
import { searchActiveTeamMembers } from '../../utils/square-staff';
import { getStartAtDate, getEndAtDate } from '../../utils/date-helpers';

const locationId = process.env.SQUARE_LOCATION_ID;
const ANY_STAFF_PARAMS = "anyStaffMember";

// Add this function to handle BigInt
function replacer(key, value) {
    if (typeof value === 'bigint') {
      return value.toString();
    }
    return value;
  }

export default async function handler(req, res) {
    const serviceId = req.query.serviceid;
    console.log("service id: ",serviceId);
    const serviceVersion = req.query.version;
    const staffId = req.query.staffid;
    const startAt = getStartAtDate();
  
    const searchRequest = {
      query: {
        filter: {
          locationId,
          segmentFilters: [
            {
              serviceVariationId: serviceId,
            },
          ],
          startAtRange: {
            endAt: getEndAtDate(startAt).toISOString(),
            startAt: startAt.toISOString(),
          },
        }
      }
    };
  
    try {
      const retrieveServicePromise = catalogApi.retrieveCatalogObject(serviceId, true);
      let availabilities;
      let additionalInfo;
  
      if (staffId === ANY_STAFF_PARAMS) {
        const [services, teamMembers] = await searchActiveTeamMembers(serviceId);
  
        searchRequest.query.filter.segmentFilters[0].teamMemberIdFilter = {
          any: teamMembers,
        };
  
        const { result } = await bookingsApi.searchAvailability(searchRequest);
        availabilities = result.availabilities;
  
        additionalInfo = {
          serviceItem: services.relatedObjects.filter(relatedObject => relatedObject.type === "ITEM")[0],
          serviceVariation: services.object
        };
  
      } else {
        searchRequest.query.filter.segmentFilters[0].teamMemberIdFilter = {
          any: [staffId],
        };
  
        const availabilityPromise = bookingsApi.searchAvailability(searchRequest);
        const bookingProfilePromise = bookingsApi.retrieveTeamMemberBookingProfile(staffId);
  
        const [ { result }, { result: services }, { result: { teamMemberBookingProfile } } ] =
          await Promise.all([availabilityPromise, retrieveServicePromise, bookingProfilePromise]);
  
        availabilities = result.availabilities;
  
        additionalInfo = {
          bookingProfile: teamMemberBookingProfile,
          serviceItem: services.relatedObjects.filter(relatedObject => relatedObject.type === "ITEM")[0],
          serviceVariation: services.object
        };
      }
  
    // Instead of res.json(), stringify your response object manually and send it with res.end()
    const responseObject = { availabilities, serviceId, serviceVersion, ...additionalInfo };
    const jsonString = JSON.stringify(responseObject, replacer);

    res.setHeader('Content-Type', 'application/json');
    res.status(200).end(jsonString);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.toString() });
  }
};



