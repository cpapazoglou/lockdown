import { useState, useEffect } from 'react';

import './App.css';

import Profile from './Profile';
import Actions from './Actions';

const smsNumber = '13033';

const App =()=> {
  const [name,setName] = useState(localStorage.getItem('name') ?? '');
  const [address,setAddress] = useState(localStorage.getItem('address') ?? '');
  const noDataSet = name === '' || address === '';

  // Save Profile Data to browser local storage
  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('address', address);
  },[name,address])
  
  return (
    <div className="App">
      <Actions noDataSet={noDataSet} smsNumber={smsNumber} name={name} address={address}/>
      <Profile noDataSet={noDataSet} name={name} address={address} setName={setName} setAddress={setAddress}/>
  </div>
  );
}

export default App;
