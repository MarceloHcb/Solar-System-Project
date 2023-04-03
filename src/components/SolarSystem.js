import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import solar from './SolarSystem.module.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className={ solar.container }>
        <Title
          headline="PLANETAS"
        />
        {planets.map(({ name, image }, index) => (
          <PlanetCard
            key={ index }
            planetName={ name }
            planetImage={ image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
