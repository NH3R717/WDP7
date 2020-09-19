import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Buttons extends Component {
  render() {
    return <h1 className={styles.defaultTextStyle}>Button</h1>;
  }
}

Buttons.propTypes = {
  id: PropTypes.string,
};

Buttons.defaultProps = {
  choice: {},
};

export default Buttons;
