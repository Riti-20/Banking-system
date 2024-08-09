import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function App() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState('');

  const Data = {
    username: 'riti',
    password: 'divine',
  }

  const navi = useNavigate();

  const login = () => {

    if (name == "") {
      setNameError('Field is requird');
    } else {
      setNameError('')

    }
    if (password == "") {
      setPasswordError('Field is requird');
    } else {
      setPasswordError('')
    }
    if (name == Data.username && password == Data.password) {
      navi("/Dashboard")
    } else {
      alert('Invalid credentials!')
    }
  };
  const forgot = () => {
    setPassword('');
  }
  return (
    <div className='main'>
      <div className='main-2'>
        <h1 className='header'>Employee Login</h1>
        <div className='inner-data-1'>
          <input
            className="a"
            type='text'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}>
          </input>
          {nameError && <p className='error-1'>{nameError}</p>}

        </div>
        <div className='inner-data-2'>
          <input
            className="b"
            type={showPassword ? 'text' : 'password'}
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
          </input>
          {passwordError && <p className='error-2'>{passwordError}</p>}
        </div>
        <div className='inner-data-3'>
          <input
            type='checkbox'
            className='radio'
            onChange={(e) => setShowPassword(!showPassword)}>
          </input>
          <p className='c1'>Show Password</p>
          <p className='c2'><a onClick={forgot}>Forgot Password</a></p>
        </div>
        <div className='inner-data-4'>
          <button onClick={login}><Link to="/Dashboard">Login</Link></button>
        </div>
      </div>
    </div>
  )
}

export default App;