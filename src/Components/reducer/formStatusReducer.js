//@param formStatus: a reducer to update the state of visitbility of form in the store
export const formStatus = (state = false, {type}) => {
  if(type === 'SWITCH_TO_TABLE'){
    return true;
  }else if(type === 'SWITCH_PAGE'){
    return !state;
  }

  return state
}