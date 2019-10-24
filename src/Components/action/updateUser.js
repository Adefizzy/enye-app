// @param updateUser: an action to update user state
export const updateUser = (values) => {
  return {
    type: "UPDATE_USER",
    payload: values
  }
}