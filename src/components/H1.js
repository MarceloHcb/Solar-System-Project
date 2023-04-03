import React from 'react';
import PropTypes from 'prop-types';
import style from './H1.module.css';

function H1(props) {
  const { title } = props;
  return (
    <h1 className={ style.title }>{title}</h1>
  );
}
H1.propTypes = {
  title: PropTypes.string.isRequired,
};
export default H1;
