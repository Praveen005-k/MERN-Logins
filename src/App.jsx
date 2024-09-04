

import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import axios from 'axios'




function App() {

   const [email, setEmail] = useState(' ');
   const [password, setPassword]  = useState();

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/login', {email, password})
      .then(result => console.log(result))
      .catch(err => console.log(err))

  }
  
  return (
    <>
      <div>
        <div className="d-flex justify-content-center align-items-center bg-success vh-100">
          <div className="bg-white p-3 rounded w-25">
            <h2>Sign-In</h2>
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter email' autoComplete='off' name='email' className='form-control rounded-0'
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="email"><strong>Password</strong></label>
                <input type="password" placeholder='Enter password' autoComplete='off' name='password' className='form-control rounded-0'
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
              <p>You agree to your terms & policies</p>
              <button type="submit" className='btn btn-success w-100 bg-light rounded-0 text-black'>Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App


