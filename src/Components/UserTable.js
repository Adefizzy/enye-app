import React from 'react';
import {Table, Tag, Button, Icon} from 'antd';
// import moment from 'moment';
// const dateFormat = 'YYYY-MM-DD'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  
   
    render: text => <strong>{text}</strong>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    
   
  },
  {
    title: 'Birthday',
    dataIndex: 'birthday',
    key: 'birthday',
    
   
  },
  {
    title: 'Hobby',
    key: 'hobby',
    dataIndex: 'hobby',
    
    
    render: hobbies => (
      <span>
        {hobbies.map(hobby => {
          let color = "#"+((1<<24)*Math.random()|0).toString(16);
          return (
            <Tag color={color} key={hobby}>
              {hobby.toLowerCase()}
            </Tag>
          );
        })}
      </span>
    ),
  }
];




class UserTable extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
         <h3>User Table</h3>
        <Table columns={columns} dataSource={this.props.data} />
        <Button type = "primary" onClick={this.props.onClickHandler}>
          <Icon type = "left"/>
          User form
        </Button>
      </div>
    )
  }
}

export default UserTable;