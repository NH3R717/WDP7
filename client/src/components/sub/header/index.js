import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Default_Comp extends Component {
  render() {
    return <h1 className={styles.defaultTextStyle}>Default_Comp</h1>;
  }
}

Default_Comp.propTypes = {
  id: PropTypes.string,
};

Default_Comp.defaultProps = {
  choice: {},
};

export default Default_Comp;
