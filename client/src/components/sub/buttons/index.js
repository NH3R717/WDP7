import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Buttons extends Component {
  render() {
    return (
      <section className={styles.buttons_container}>
        <h1 className={styles.buttons}>Button</h1>
      </section>
    );
  }
}

Buttons.propTypes = {
  id: PropTypes.string,
};

Buttons.defaultProps = {
  choice: {},
};

export default Buttons;
