const { gql } = require("apollo-server");
let { users, events, locations, participants } = require("./data.json");
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  input CreateUserInput {
    username: String!
    email: String!
  }
  input UpdateUserInput {
    id: ID!
    username: String
    email: String
  }

  type Event {
    id: ID!
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
    participants: [Participant!]
    location: [Location!]
    user: [User!]
  }

  type Location {
    id: ID!
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
  }

  type Participant {
    id: ID!
    user_id: ID!
    event_id: ID!
    username: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    events: [Event!]!
    event(id: ID!): Event!
    locations: [Location!]!
    location(id: ID!): Location!
    participants: [Participant!]
    participant(id: ID!): Participant
  }

  type Mutation {
    createUser(data: CreateUserInput!): Boolean!
    updateUser(data: UpdateUserInput!): User
    deleteUser(id: ID!): Boolean!
    deleteAllUsers: Int!
  }
`;

const resolvers = {
  Mutation: {
    createUser: (parent, { data }) => {
      users.push({
        id: users.length + 1,
        ...data,
      });
      return true;
    },
    updateUser: (parent, { data }) => {
      let user_index = users.findIndex((user) => user.id == data.id);
      if (user_index == -1) throw new Error("User not found");

      const updated_user = (users[user_index] = {
        ...users[user_index],
        ...data,
      });
      return updated_user;
    },
    deleteUser: (parent, { id }) => {
      let user_index = users.findIndex((user) => user.id == data.id);
      if (user_index == -1) throw new Error("User not found");

      return users.splice(user_index, 1);
    },
    deleteAllUsers: (parent,args) => {
      let count= users.length;
      users=[];
      return count;      
    },
  },
  Query: {
    users: () => users,
    user: (parent, args) => users.find((user) => user.id == args.id),
    events: (parent, args) => events,
    event: (parent, args) => events.find((event) => event.id == args.id),
    locations: () => locations,
    location: (parent, args) => locations.find((location) => location.id == args.id),
    participants: () => participants,
    participant: (parent, args) => participants.find((participant) => participant.id == args.id),
  },

  Event: {
    user: (parent) => users.filter((user) => user.id == parent.user_id),
    participants: (parent) =>
      participants.filter((participant) => participant.event_id == parent.id && participant.user_id == parent.user_id),
    location: (parent) => locations.filter((location) => location.id == parent.location_id),
  },
  Participant: {
    username: (parent) => {
      const [{ username }] = users.filter((user) => user.id == parent.user_id);
      return username;
    },
  },
};

module.exports = { resolvers, typeDefs };
