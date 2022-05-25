import React, { Component } from 'react';
import axios from 'axios';

export default class Get extends Component {
    state ={
        users:[],
    };
  componentDidMount=async()=>{
     const listitem =await axios.get('https://reqres.in/api/users?page=2')
     console.log(listitem)
      this.setState({ users:listitem.data.data });
  
  }
  render() {
    
    return (
      
      <div className='container'>
        {this.state.users.map((users)=>{
          return (
          <div className="users" style={{display:'contents'}}>
              <img src={users.avatar} style={{width:'100px' ,borderRadius:'50%'}}/>
              <h1>{users.first_name} {users.last_name}</h1>
              <h2>{users.email}</h2>
          </div>
          );
        })}
      </div>
      )
    
      }
  
}
