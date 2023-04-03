import React from 'react';
import PropTypes from 'prop-types';
import style from './PlanetCard.module.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className={ style.container }>
        <img
          src={ planetImage }
          className={ style.image }
          alt={ `Planeta ${planetName}` }
        />
        <p data-testid="planet-name" className={ style.p }>
          {' '}
          { planetName }
          {' '}
        </p>
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
export default PlanetCard;
