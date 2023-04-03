import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import style from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={ style.container }>
        <div className={ style.background } />
        <hr className={ style.hr } />
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
