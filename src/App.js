import { useState, useEffect } from 'react';
import Profile from './Profile';
import Profile from './Profile';
import ActionsSection from './ActionsSection';

import './App.css';


const App =()=> {
  const [name,setName] = useState(localStorage.getItem('name') ?? '');
  const [address,setAddress] = useState(localStorage.getItem('address') ?? '');
  const dataSet = name !== '' && address !== '';

  // Save Profile Data to browser local storage
  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('address', address);
  },[name,address])
  
  return (
    <div className="App">
      <Header/>
      <ActionsSection dataSet={dataSet} smsNumber={smsNumber} name={name} address={address}/>
      <Profile dataSet={dataSet} name={name} address={address} setName={setName} setAddress={setAddress}/>
  </div>
  );
}

export default App;
