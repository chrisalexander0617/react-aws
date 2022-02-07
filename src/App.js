import React, {useState} from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';
import './App.css';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

function App() {
  async function postData(){
    console.log("posting data")
    await DataStore.save(
        new Todo({
        "name": "Lorem ipsum dolor sit amet",
        "description": "Lorem ipsum dolor sit amet"
      })
    );
  }

  return (
    <div className="App">
      <button onClick={postData}>Test Data</button>
    </div>
  );
}

export default App;
