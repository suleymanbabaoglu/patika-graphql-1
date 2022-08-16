export const Participant = {
  username: (parent, __, { data }) => {
    const [{ username }] = data.users.filter((user) => user.id == parent.user_id);
    return username;
  },
};

