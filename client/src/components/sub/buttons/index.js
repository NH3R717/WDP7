import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { FaHome } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Buttons extends Component {
  render() {
    return (
      <Container className={styles.sticky_container}>
        <section className={styles.buttons_container}>
          <Link to="/notifications">
            <Button className={styles.buttons}>
              <FaHome />
            </Button>
          </Link>
          <Link to="/notification">
            <Button className={styles.buttons}>NC</Button>
          </Link>
          <Link to="/direct-message-contacts">
            <Button className={styles.buttons}>DM</Button>
          </Link>
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
