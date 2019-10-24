//@param birthday: a reducer to update birthday state  in the store
export const birthday = (state = null, { type, payload }) => {
  if(type === 'UPDATE_BIRTHDAY'){
    return payload
  }
  
  return state;
}