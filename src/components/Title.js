import React from 'react';
import PropTypes from 'prop-types';
import style from './Title.module.css';

function Title(props) {
  const { headline } = props;
  return (
    <h2 className={ style.container }>{headline}</h2>
  );
}
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default Title;
