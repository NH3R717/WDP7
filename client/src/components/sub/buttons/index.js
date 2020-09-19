import React, { Component } from 'react';
import { Button, Container } from 'reactstrap';
import { FaHome } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Buttons extends Component {
  render() {
    return (
      <Container className={styles.sticky_container}>
        <section className={styles.buttons_container}>
          <Button className={styles.buttons}>
            <IoIosArrowBack />
          </Button>
          <Button className={styles.buttons}>
            <FaHome />
          </Button>
          <Button className={styles.buttons}>NC</Button>
          <Button className={styles.buttons}>DM</Button>
        </section>
      </Container>
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
