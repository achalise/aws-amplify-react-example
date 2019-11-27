import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react';
import { Layout } from './components/layout/Layout';
//import 'bootstrap/dist/css/bootstrap.min.css';

Amplify.configure(awsconfig);

const App: React.FC = () => {
  return (
    <Layout></Layout>
  );
}

//export default withAuthenticator(App);
export default App;