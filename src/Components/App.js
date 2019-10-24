import React from 'react';
import UserTable from './UserTable';
import UserInputForm from './Form'
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';

// const UserInputForm = Form.create({ name: 'horizontal_login' })(UserInput); 

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      key: 1,
      users: [],
      formSubmitted: false,
      birthday:null
    }
  }

  onChangeHandler = (date, dateString) => {
    this.setState({birthday: dateString});
  }
  handleSubmit = (e, formProps) => {
    e.preventDefault();
    formProps.form.validateFields((err, values) => {
      if (!err) {
        this.setState(
          prevState=>{
            let name = `${values['first name']} ${values['last name']}`;
       delete values['first name'];
       delete values['last name'];
       values['name'] = name;
       values['birthday'] = prevState.birthday
       values['key'] = prevState.key;
            return {
              users: [...prevState.users, values],
              key: prevState.key + 1,
              formSubmitted: true
            }
          }
        )
      }
    });
  };
  onClickHandler = () => {
    this.setState(
      prevState => {
        return{
          formSubmitted: !prevState.formSubmitted
        }
      }
    )
  }
  render(){
    const activeComponent = this.state.formSubmitted ? <UserTable data= {this.state.users} onClickHandler = {this.onClickHandler}/>
    :<UserInputForm handleSubmit = {this.handleSubmit} onChangeHandler = {this.onChangeHandler} onClickHandler = {this.onClickHandler}/>;
    return (
        <Row>
          <Col xs={{span: 20, offset: 2}} md={{span: 8, offset: 8}}>
          <div style = {{marginTop : 20, textAlign: 'center'}}>
            {activeComponent}
          </div>
          </Col>
        </Row>
    )
  }
}
export default App;