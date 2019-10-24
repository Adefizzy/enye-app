// @param switchPage: an action to switch the page from user-form to user-table and vice versa
export const switchPage = () => {
  return{
    type: 'SWITCH_PAGE'
  }
}

//@params switchToTable: an action to user-table on submission of user-form
export const switchToTable = () => {
  return{
    type: 'SWITCH_TO_TABLE'
  }
}