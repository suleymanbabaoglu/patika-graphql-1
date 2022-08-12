export const Event = {
  user: (parent, __, { data }) => data.users.filter((user) => user.id == parent.user_id),
  participants: (parent, __, { data }) =>
    data.participants.filter(
      (participant) => participant.event_id == parent.id && participant.user_id == parent.user_id
    ),
  location: (parent, __, { data }) => data.locations.filter((location) => location.id == parent.location_id),
};
