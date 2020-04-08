import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './components/NavBar/LogIn'
import PinMasonry from './components/PinMasonry/PinMansonry'
import samplePinData from './samplePinData.json'


function App() {
  const [search, setSearch] = useState("")
  console.log(onsearch)
  useEffect(() => {
    console.log("searching from the App component", search)
  }, [search])

  return (
    <div>
    <LogIn onChange={setSearch}/>
    <PinMasonry pins={samplePinData}/>
    </div>
  );
}



export default App;
