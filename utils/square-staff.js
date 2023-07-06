import { bookingsApi, catalogApi, teamApi } from './square-client';

const locationId = process.env.SQUARE_LOCATION_ID;

export async function searchActiveTeamMembers(serviceId) {
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

  const serviceVariation = services.object;
  const serviceTeamMembers = serviceVariation.itemVariationData.teamMemberIds || [];
  const activeTeamMembers = teamMembers.map((teamMember) => teamMember.id);

  const bookableStaff = teamMemberBookingProfiles
    .filter((profile) => serviceTeamMembers.includes(profile.teamMemberId) && activeTeamMembers.includes(profile.teamMemberId));

  return [services, bookableStaff.map((staff) => staff.teamMemberId)];
}
