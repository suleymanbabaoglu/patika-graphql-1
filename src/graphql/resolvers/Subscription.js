import pubSub from "../../redis";
export const Subscription = {
  userCreated: {
    subscribe: () => pubSub.subscribe("userCreated"),
    resolve: (payload) => payload.user,
  },
  eventCreated: {
    subscribe: () => pubSub.subscribe("eventCreated"),
    resolve: (payload) => payload.event,
  },
  participantAdded: {
    subscribe: () => pubSub.subscribe("participantAdded"),
    resolve: (payload) => payload.participant,
  },
};
