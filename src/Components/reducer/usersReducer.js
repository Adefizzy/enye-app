//param users: a reducer to update the state of the users in the store
export const users = (state = [], {type, payload}) => {
  if(type === "UPDATE_USER"){
        return [...state, payload]
      }
      return state;
  }

 
