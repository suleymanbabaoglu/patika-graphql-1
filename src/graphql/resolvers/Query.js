export const Query = {
  users: (_, __, { data }) => data.users,
  user: (_, __, { data }) => data.users.find((user) => user.id == args.id),
  events: (_, __, { data }) => data.events,
  event: (_, __, { data }) => data.events.find((event) => event.id == args.id),
  locations: (_, __, { data }) => data.locations,
  location: (_, __, { data }) => data.locations.find((location) => location.id == args.id),
  participants: (_, __, { data }) => data.participants,
  participant: (_, __, { data }) => data.participants.find((participant) => participant.id == args.id),
};

