import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Amplify, { Auth } from 'aws-amplify';
//import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { Layout } from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

//Amplify.configure(awsconfig);

const App: React.FC<AppProps> = (props: AppProps) => {
  console.log(`Props to the app`, props);
  return (
    <BrowserRouter>
      <Layout client={props.client}></Layout>
    </BrowserRouter>
  );
}

//export default withAuthenticator(App);
export default App;

export interface AppProps {
  client: any
}