import { useState } from 'react';
import Header from './Header';
import Profile from './Profile';
import TimeLeft from './TimeLeft';
import ActionsSection from './ActionsSection';

import './App.css';


const App =()=> {
  const [ profile ,setProfile] = useState( { name: localStorage.getItem('name') ?? '', address:localStorage.getItem('address') ?? '' } );
  const dataSet = profile.name !== '' && profile.address !== '';
  
  return (
    <div className="App">
      <Header/>
      <Profile dataSet={ dataSet } profile={ profile } setProfile={ setProfile }/>
      <TimeLeft/>
      <ActionsSection dataSet={ dataSet } profile={ profile }/>
  </div>
  );
}

export default App;
