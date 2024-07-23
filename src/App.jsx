import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import './App.css';
import './AppNew.css'
import Residencies from './components/Residencies/Residencies';
import Values from './components/Values/Values';
import Contact from './components/Contact/contact';
import GetStarted from './components/GetStarted/GetStarted'; 
import Foot from './components/Foot/Foot';




const App=() => {
  return (
   <div className="App">
    <div className='child1'>
    <div className="white-gradient"/>
    <Header/>
      <Hero/>   
    </div>
    <Companies/>
    <Residencies/>
    <Values/>
    <Contact/>
    <GetStarted/>
    <Foot/>

    
  
   </div>
   
   
  );
}


export default App;

