import { bookingsApi, catalogApi, teamApi } from '../../utils/square-client';

const locationId = process.env.SQUARE_LOCATION_ID;

function handleBigInt(obj) {
    if (obj === null || obj === undefined) return obj;
    if (typeof obj === 'bigint') return obj.toString();
    if (typeof obj === 'object') {
        for (let key in obj) {
            obj[key] = handleBigInt(obj[key]);
        }
    }
    return obj;
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const serviceId  = req.query.serviceid;
    const serviceVersion = req.query.version;
    console.log("service version: ",serviceVersion);
    console.log("service id: ",serviceId);
    try {
      const retrieveServicePromise = catalogApi.retrieveCatalogObject(serviceId, true);
      const listBookingProfilesPromise = bookingsApi.listTeamMemberBookingProfiles(true, undefined, undefined, locationId);
      const listActiveTeamMembersPromise = teamApi.searchTeamMembers({
        query: {
          filter: {
            locationIds: [locationId],
            status: 'ACTIVE',
          },
        },
      });

      const [
        { result: services },
        { result: { teamMemberBookingProfiles } },
        { result: { teamMembers } },
      ] = await Promise.all([retrieveServicePromise, listBookingProfilesPromise, listActiveTeamMembersPromise]);
      console.log("team members: ",teamMembers);
      const serviceVariation = services.object;
      const serviceItem = services.relatedObjects.filter((relatedObject) => relatedObject.type === 'ITEM')[0];

      let serviceTeamMembers = [];
      if (serviceVariation && serviceVariation.itemVariationData) {
        serviceTeamMembers = serviceVariation.itemVariationData.teamMemberIds || [];
      }
      
      const activeTeamMembers = teamMembers.map((teamMember) => teamMember.id);
      console.log("active team members: ", activeTeamMembers);
      const bookableStaff = teamMemberBookingProfiles.filter(
        (profile) => serviceTeamMembers.includes(profile.teamMemberId) && activeTeamMembers.includes(profile.teamMemberId)
      );

      const responseObject = { bookableStaff, serviceItem, serviceVariation, serviceVersion };
      res.status(200).json(handleBigInt(responseObject));
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

