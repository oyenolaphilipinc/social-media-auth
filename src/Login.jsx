import React from 'react'
import { StytchLogin, useStytchSession } from "@stytch/react";
import { Link } from "react-router-dom";

const Login = () => {
  const {session} = useStytchSession()
  const stytchProps = {
    loginOrSignupView: {
      products: ["emailMagicLinks"],
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

  console.log('session', session)

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