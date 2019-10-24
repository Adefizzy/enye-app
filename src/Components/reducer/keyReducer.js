//@param key: a reducer to update key state in the store
export const key = (state = 0, {type, payload}) => {
  if(type === "INCREMENT"){
    return state + 1;
  }
  return state;
}