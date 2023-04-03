import React from 'react';
import PropTypes from 'prop-types';
import { IoLocationSharp } from 'react-icons/io5';
import { BsCalendar2EventFill, BsFillFlagFill } from 'react-icons/bs';
import style from './MissionCard.module.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className={ style.container }>
        <div>
          <p data-testid="mission-name" className={ style.name }>
            {' '}
            { name }
          </p>
        </div>
        <hr />
        <div className={ style.info__botton }>
          <p data-testid="mission-year" className={ style.info }>
            <BsCalendar2EventFill className={ style.icon } />
            {year}
            {' '}
          </p>
          <p data-testid="mission-country">
            <IoLocationSharp className={ style.icon } />
            {' '}
            {country}
            {' '}
          </p>
          <p data-testid="mission-destination">
            <BsFillFlagFill className={ style.icon } />
            {' '}
            {destination}
            {' '}
          </p>
        </div>
      </div>
    );
  }
}
MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,

};
export default MissionCard;
