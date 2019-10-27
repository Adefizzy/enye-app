import React from 'react';
import UserTable from './UserTable';
import UserInputForm from './Form'
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {switchPage} from './action/switchPage';
// import {updateUser} from './action/updateUser';
import {birthday} from './action/updateBirthday'
import {createUser} from './action/createUser';
// import {keyIncrement} from '../Components/action/keyIncrement';




const App = (props) => {
 
  const formStatus = useSelector(state => state.formStatus),// the state of form status
        currentBirthday = useSelector(state => state.birthday),// the state of birthday in date string
        // key = useSelector(state => state.key), // the state of key
        currentUsers = useSelector(state => state.users, shallowEqual); // the state of array of current users

        for(let index = 1; index < currentUsers.length; index++){
          currentUsers[index]['key'] = index;
        }

  const dispatch = useDispatch(); // an instance of useDispatch

  /*
  @param dateChangeHandler: function to handle the date change in datePicker
  component in the userInputForm component
  */
  const dateChangeHandler = (date, dateString) => {
    //birthday action is dispatched to the reducer in the store
    dispatch(birthday(date, dateString))
  }
   
  /*
  @param submitHandler: a function to handle the submission of form in the userInputForm component
  */
  const submitHandler = (e, formProps) => {
    e.preventDefault();
    formProps.form.validateFields((err, values) => {
      if (!err) {   
        let name = `${values['first name']} ${values['last name']}`;
        delete values['first name'];
        delete values['last name'];
        values['name'] = name;
         values['birthday'] = currentBirthday
        

        dispatch(createUser(values));
      }
    });
  };

  //@pageSwitchHandler: a function to handle switching of page from form to table UI
  const pageSwitchHandler = () => {
    dispatch(switchPage());
  }
  
   //conditional rendering of view 
  const activeComponent = formStatus ? <UserTable 
  onPageSwitch = {pageSwitchHandler}
  users ={currentUsers}
  /> 
  : <UserInputForm 
  onPageSwitch = {pageSwitchHandler} 
  onDateChange ={dateChangeHandler}
  onSubmit = {submitHandler}
  />;
  return (
      <Row>
        <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 6}}>
        <div style = {{marginTop : 20, textAlign: 'center'}}>
          {activeComponent}
        </div>
        </Col>
      </Row>
  )
}

export default App;