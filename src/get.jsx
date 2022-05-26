import React, { Component } from 'react';
import axios from 'axios';
import './st.css';

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
        <div >
        <input className="button-3" type='button' onClick={this.creatUser} value="create" />
        </div>
        {this.state.users.map((users)=>{
          return (
          <div className="users" style={{display:'contents'}}>
              <img src={users.avatar} style={{width:'100px' ,borderRadius:'50%'}}/>
              <h1>{users.first_name} {users.last_name}</h1>
              <h2>{users.email}</h2>
              <div>
              <input className='button-1' type='button' value="update" onClick={this.hdlupdate}/>
              <input className='button-1'  type='button' value="delete" onClick={this.hdldelete} />
              </div>
          </div>
          );
        })}
      </div>
      )
    
      }
   hdlupdate = async(users)=>{
     const newupdate =await axios.put(`https://reqres.in/api/users/${users.id}`,users)
     this.state.users.last_name="roya"
     this.setState({users : newupdate.data.users}) 
    }
    hdldelete = async(users)=>{
      const deletuser= await axios.delete(`https://reqres.in/api/users/${users.id}`)
      console.log(deletuser)
      const indexuser =this.state.users.filter ((u) =>u.id !==users.id)
      this.setState ({users : indexuser})
    }

    creatUser = async()=>{
      const newuser= {
        first_name:'roya',
        last_name :'karimi',
        email : 'bhjkjhlkjlkj'
      
    }
    const response= await axios.post ('https://reqres.in/api/users',newuser)
    console.log(response)
  }

}
