import { Tag } from 'antd';
import React from 'react';

export const columns = [
  {
    title: 'User Id',
    dataIndex: 'userId',
    key: 'userId',
  
   
    render: text => <strong>{text}</strong>,
  },
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