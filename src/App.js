import { useState } from 'react';
import Header from './Header';
import Profile from './Profile';
// import TimeLeft from './TimeLeft';
import ActionsSection from './ActionsSection';
import migrations from './data/Migrations'

import './App.css';
import AddressSelector from './AddressSelector';

const App = () => {
  migrations();
  const profileData = JSON.parse(localStorage.getItem('profile'));
  const name = profileData?.name ?? '';
  const addresses = profileData?.addresses ?? [];
  const [ profile,setProfile ] = useState( { name , addresses } );
  
  const dataSet = profile.name !== '' && profile?.addresses.filter( address => address.selected )[0]?.address !== '';
  
  return (
    <div className="App">
      <Header/>
      <Profile dataSet={ dataSet } profile={ profile } setProfile={ setProfile }/>
      {/* <TimeLeft/> */}
      <AddressSelector profile={ profile } setProfile={ setProfile }/>
      <ActionsSection dataSet={ dataSet } profile={ profile }/>
  </div>
  );
}

export default App;
