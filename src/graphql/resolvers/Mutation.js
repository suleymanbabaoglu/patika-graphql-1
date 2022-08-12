import pubSub from "@pubSub";
export const Mutation = {
  createUser: (_, { sentData }, { data }) => {
    const user = { id: data.users.length + 1, ...sentData };
    data.users.push(user);
    pubSub.publish("userCreated", user);
    return user;
  },
  createEvent: (_, { sentData }, { data }) => {
    const event = { id: data.events.length + 1, ...sentData };
    data.events.push(event);
    pubSub.publish("eventCreated", event);
    return event;
  },
  addParticipant: (_, { sentData }, { data }) => {
    const participant = { id: data.participants.length + 1, ...sentData };
    data.participants.push(participant);
    pubSub.publish("participantAdded", participant);
    return participant;
  },
  updateUser: (_, { sentData }, { data }) => {
    let user_index = data.users.findIndex((user) => user.id == sentData.id);
    if (user_index == -1) throw new Error("User not found");

    const updated_user = (data.users[user_index] = {
      ...data.users[user_index],
      ...sentData,
    });
    return updated_user;
  },
  deleteUser: (_, { id }, { data }) => {
    let user_index = data.users.findIndex((user) => user.id == sentData.id);
    if (user_index == -1) throw new Error("User not found");

    return data.users.splice(user_index, 1);
  },
  deleteAllUsers: (_, __, { data }) => {
    let count = data.users.length;
    data.users = [];
    return count;
  },
};
