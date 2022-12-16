import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Welcome from './Welcome'
import Profile from './Profile'
import Authenticate from './Authenticate'
import Login from './Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StytchProvider } from '@stytch/react';
import { StytchUIClient } from '@stytch/vanilla-js';

// SET YOUR STYTCH PUBLIC TOKEN TO THIS VARIABLE. YOU CAN GET IT FROM THE STYTCH DASHBOARD AT https://stytch.com/dashboard/api-keys
const STYTCH_PUBLIC_TOKEN = 'public-token-test-5fb66ad9-f2cf-4e9f-9a35-218e6a4c227b'


const stytch = new StytchUIClient(STYTCH_PUBLIC_TOKEN);

ReactDOM.render(
  <React.StrictMode>
    <StytchProvider stytch={stytch}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/authenticate" element={<Authenticate />} />
        </Routes>
      </BrowserRouter>
    </StytchProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
