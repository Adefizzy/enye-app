//@ param birthday : an action to extract date string from datePicker component
export const birthday = (date, dateString) => {
  return {
    type: "UPDATE_BIRTHDAY",
    payload: dateString
  }
}