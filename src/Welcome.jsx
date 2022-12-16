import React from 'react';
import { Link } from "react-router-dom";
import red from "./redirects.png"
import sdk from "./sdk.png"

function App() {
  return (
    <main>
      <div>
        <h1>Welcome</h1>
        <p>
          This template demonstrates how to implement Email magic links using the Stytch React SDK. To try it out follow the log in link below.
        </p>
        <Link to="/login">Log in</Link>
        <h2>Set up</h2>
        <p>This template comes prepopulated with a public token owned by Stytch which allows the template to work out of the box. However, if you would like to use Stytch within your own application you will need to set up your own project.</p>
        <p>In order to use Stytch in your application you will need to <a href="https://www.stytch.com" target="_blank">create an account</a>. Once you have an account you should follow the steps below to set up your project and get your API keys.</p>
        <ol>
          <li>Add the following redirect URLs at <a href="https://stytch.com/dashboard/redirect-urls" target="_blank">stytch.com/dashboard/redirect-urls</a>:  <code>https://*.id.repl.co/authenticate</code> and <code>https://*.repl.co/authenticate</code>. Be sure to select Type <strong>All</strong> when creating it.

          </li>
          <img width={300} src={red} />
          <li>In the <a href="https://stytch.com/dashboard/sdk-configuration" target="_blank">SDK configuration</a> add the domain <code>
            https://*.*.repl.co</code> and toggle on <strong>Email magic links</strong> underneath <strong>Auth methods</strong>
          </li>
          <img width={300} src={sdk} />
          <li>Copy your <strong>Public token</strong> from the <a href="https://stytch.com/dashboard/api-keys" target="_blank">API keys</a> page, and set it to the <code>STYTCH_PUBLIC_TOKEN</code> variable in <code>main.jsx</code>.</li>
        </ol>
      </div>

    </main>
  );
}

export default App;
