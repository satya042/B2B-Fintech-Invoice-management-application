import React from 'react';
import './App.css';
import Header from '../src/components/Header';
import Tablediv from '../src/components/Tablediv';
import Footer from './components/Footer';
import ActionState from './context/action/ActionState';

const App = () => {
  
  return (
    <div className="mainBackground">
      <ActionState>
      <Header/>
      <Tablediv/>
      <Footer/>
      </ActionState>
    </div>
  );
};

export default App;
