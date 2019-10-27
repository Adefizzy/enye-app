import React, {useEffect}from 'react';
import { DatePicker, Button, Form, Input,InputNumber,Select, Icon } from 'antd';



const {Option} = Select;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const children = [];
const predefinedHobbies = ['movies', 'cooking', 'reading', 'travelling', 'cycling', 'swimming'];

//populate the select options with predefined hobbies
predefinedHobbies.forEach(hobby => {
  children.push(<Option key={hobby}>{hobby}</Option>)
});

const UserInput = (props) => { 
 
 // mute the submit button only on the first render
  useEffect(() => {
    props.form.validateFields();
    // eslint-disable-next-line
  }, []);
 

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

    // Only show error after a field is touched.
    const firstNameError = isFieldTouched('first name') && getFieldError('first name');
    const lastNameError = isFieldTouched('last name') && getFieldError('last name');
    const birthdayError = isFieldTouched('birthday') && getFieldError('birthday');
    const ageError = isFieldTouched('age') && getFieldError('age');
    const hobbyError = isFieldTouched('hobby') && getFieldError('hobby');
    return (
      <div style={{margin: "0 auto"}}>
         <h3>User Form</h3>
        <Form layout="vertical" onSubmit={(e) => props.onSubmit(e,props)}>
          <Form.Item validateStatus={firstNameError ? 'error' : ''} help={firstNameError || ''}>
            {getFieldDecorator('first name', {
              rules: [{ required: true, message: 'Please input your First Name!'}],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="First Name"
               
              />,
            )}
          </Form.Item>
          <Form.Item validateStatus={lastNameError ? 'error' : ''} help={lastNameError || ''}>
            {getFieldDecorator('last name', {
              rules: [{ required: true, message: 'Please input your Last Name!'}],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Last Name"
                
              />,
            )}
          </Form.Item>
          <Form.Item validateStatus={birthdayError ? 'error' : ''} help={birthdayError || ''}>
            {getFieldDecorator('birthday', {
              rules: [{ required: true, message: 'Please input your Birthday!'}],
            })(
              <DatePicker
                placeholder="Birthday"
                style = {{width: '100%'}}
                onChange = {(date, dateString) => props.onDateChange(date, dateString)}
              />,
            )}
          </Form.Item>
          <Form.Item validateStatus={ageError ? 'error' : ''} help={ageError || ''}>
            {getFieldDecorator('age', {
              rules: [{ required: true, message: 'Please input your age!' }],
            })(
              <InputNumber 
              min={18} 
              max={99} 
              placeholder="Age"  
              style = {{width: '100%'}} 
            
              />,
            )}
          </Form.Item>
          <Form.Item validateStatus={hobbyError ? 'error' : ''} help={hobbyError || ''}>
            {getFieldDecorator('hobby', {
              rules: [{ required: true, message: 'Select or input your hobby !'}],
            })(
              <Select mode="tags" 
              style={{ width: '100%' }} 
              tokenSeparators={[',']} 
               >
                {children}
              </Select>,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} style={{width: '100%'}}>
              submit form
            </Button>
          </Form.Item>
        </Form>
        <Button type = 'primary' onClick={() => props.onPageSwitch()}>
          User Table
          <Icon type ="right"/>
        </Button>
        </div>
    );
  }

const UserInputForm = Form.create({ name: 'horizontal_login' })(UserInput); 

export default UserInputForm;

