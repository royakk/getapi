import React, { Component } from 'react';
import axios from 'axios';
import './st.css';

export default class Get extends Component {
    state ={
        users:[],
    };
  componentDidMount=async()=>{
     const listitem =await axios.get('https://reqres.in/api/users?page=1')
     console.log(listitem)
      this.setState({ users:listitem.data.data });
  
      
  }
  render() {
    
    return (
      
      <div className='container'>
        <div >
        <input className="button-3" type='button' onClick={this.creatUser} value="create" />
        </div>
        {this.state.users.map((user)=>{
          return (
          <div className="users" style={{display:'contents'}}>
              <img src={user.avatar} style={{width:'100px' ,borderRadius:'50%'}}/>
              <h1>{user.first_name} {user.id}</h1>
              <h2>{user.email}</h2>
              <div>
              <input className='button-1' type='button' value="update" onClick={()=>this.hdlupdate(user)}/>
              <input className='button-1'  type='button' value="delete" onClick={()=>this.hdldelete(user)} />
              </div>
          </div>
          );
        })}
      </div>
      )
    
      }

      hdlupdate = async (user)=> {
       
        user.first_name="roya";
        const newupdate =await axios.put(`https://reqres.in/api/users/${user.id}`);
        console.log(newupdate)
        const updateuser=[...this.state.users];
       const userindex= updateuser.indexOf(user);
       console.log(user.id)
       console.log(userindex)
       updateuser[userindex]={...user};
        this.setState({users : updateuser}) 
       };

    hdldelete = async(user)=>{
      const deletuser= await axios.delete(`https://reqres.in/api/users/${user.id}`)
      console.log(deletuser)
      const indexuser =this.state.users.filter ((u) =>u.id !==user.id)
      this.setState ({users : indexuser})
    }


    creatUser = async()=>{
      const newuser= {
        first_name:'roya',
        last_name :'karimi',
        email : 'a.b@c.d'
      
    }
    const response= await axios.post ('https://reqres.in/api/users',newuser)
    console.log(response)
    this.setState({users :[...this.state.users,newuser]})
  }

}
