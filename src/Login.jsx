import React, {useEffect} from 'react'
import { StytchLogin, useStytchSession, useStytchUser } from "@stytch/react";
import {Products} from "@stytch/vanilla-js"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  console.log(Products)
  const {user} = useStytchUser()
  const {session} = useStytchSession()
  const navigate = useNavigate()
  const stytchProps = {
    loginOrSignupView: {
      products: [Products.emailMagicLinks],
      emailMagicLinksOptions: {
        loginRedirectURL: 'https://' + window.location.hostname + "/authenticate",
        loginExpirationMinutes: 30,
        signupRedirectURL: 'https://' + window.location.hostname + "/authenticate",
        signupExpirationMinutes: 30,
        createUserAsPending: true,
      },
    },
    style: {
      fontFamily: '"Helvetica New", Helvetica, sans-serif',
      width: "321px",
      primaryColor: "#0577CA",
    }
  };

  useEffect(() => {
    if(user) {
      navigate('/profile')
    }
    
  }, [user, navigate])

  return (
    <main>
       <Link to="/">Return to Welcome page</Link>
      <br></br>
      <StytchLogin
        config={stytchProps.loginOrSignupView}
        styles={stytchProps.style}
      />
    </main>
  );
}

export default Login