import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import style from './Mission.module.css';
import logoTrybe from '../images/logoTrybe.png';

class Missions extends React.Component {
  render() {
    return (
      <div className={ style.all }>
        <div data-testid="missions" className={ style.main }>
          <div className={ style.container }>
            <Title
              headline="Missões"
            />
          </div>
          {missions.map(({ name, year, country, destination }, index) => (
            <MissionCard
              key={ index }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </div>
        <img src={ logoTrybe } alt="Logo da Trybe" className={ style.logo } />
      </div>
    );
  }
}

export default Missions;
