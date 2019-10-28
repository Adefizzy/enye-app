//param users: a reducer to update the state of the users in the store
export const users = (state = [], {type, payload}) => {
  if(type === "UPDATE_USER"){
         
         let userArray = [];
         if(Object.getOwnPropertyNames(payload).length !== 0){
           
         Object.entries(payload).forEach(load => {
           userArray.push(load[1]);
         });

        }
        return userArray;
      }
      return state;
  }

 
