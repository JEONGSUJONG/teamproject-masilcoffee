export const getUser = (userData) => ({
  type: "get.user",
  payload: { userData },
});

export const postUser = (updateUser) => ({
  type: "post.user",
  payload: { updateUser },
});

export const removeUser = () => ({
  type: "remove.user",
});
