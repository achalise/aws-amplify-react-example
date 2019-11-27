import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Amplify, { Auth } from 'aws-amplify';
//import awsconfig from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react';

//Amplify.configure(awsconfig);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//export default withAuthenticator(App);
export default App;