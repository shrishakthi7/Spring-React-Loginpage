import React, { useEffect, useState } from 'react'
import "./style.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SigneUp = () => {
  let navigate = useNavigate()

  let [formData,setFormData] = useState({name:"",pass:""});


  let handleInput = (e)=>{
        console.log("hi")
        let key = e.target.name
        let val = e.target.value
         
        setFormData({...formData,[key]:val})
    }



    let sendData =async (user)=>{
      
     await axios.post("http://localhost:8080/user",user)
     .then((resp)=>{
      console.log(resp)
     })
    }

     
    let handleSub= (e)=>{
        e.preventDefault()
        console.log(formData)

        sendData(formData)

        setFormData({name:'',pass:''})


    }

 return (
    <div className="signup-parent">
      <div className="signup-child">
        <h2>Signup</h2>

        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            onChange={handleInput}
            name='name'
            value={formData.name}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={handleInput}
            name='pass'
            value={formData.pass}
          />
        </div>
        
        <div className="button-group">
          <button className="signup-btn" onClick={handleSub} >Signup</button>
          <button className="login-btn" onClick={()=>{navigate('/')}}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default SigneUp
