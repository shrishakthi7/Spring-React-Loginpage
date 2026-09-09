import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    let [formData,setFormData] = useState({name:"",pass:""});
    let [responce,setResponce] = useState();
    let [string,setString] = useState('')
    let navigate = useNavigate()

    let handleInput = (e)=>{
       
        let key = e.target.name
        
        let val = e.target.value
       

        setFormData({...formData,[key]:val})
    }

    let authinticate = async (user)=>{
      await axios.post("http://localhost:8080/login",user)
      .then((resp)=>{
        console.log(resp.data)
         if(resp.data==-1){
           setString('Invalid User')
           setFormData({name:'',pass:''})
        }
        else if(resp.data==0){
           setString('Wrong password')
           setFormData({name:formData.name,pass:''})
        }
        else{
           setString('Login success')
           setFormData({name:'',pass:''})
        }
      })
    }

    let handleSub= (e)=>{
        e.preventDefault()
        console.log(formData)

        authinticate(formData)
       
        
    }

  return (
    <div className="login-parent">
      <div className="login-child">
        <h2>Login</h2>

        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter username" name="name" onChange={handleInput} value={formData.name}/>
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" name="pass" onChange={handleInput} value={formData.pass}/>
        </div>
        <p className="text">{string}</p>
        <div className="button-group">
          <button className="login-btn" onClick={handleSub}>Login</button>
          <button className="signup-btn" onClick={()=>navigate('/signup')}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Login;