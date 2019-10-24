import React from 'react';
import {Table, Button, Icon} from 'antd';
import {columns} from './columns';


const  UserTable = (props) => {
    return(
      <div>
         <h3>User Table</h3>
        <Table columns={columns} dataSource={props.users} />
        <Button type = "primary" onClick={() => props.onPageSwitch()}>
          <Icon type = "left"/>
          User form
        </Button>
      </div>
    )
  }


export default UserTable;