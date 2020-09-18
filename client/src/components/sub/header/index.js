import React, { Component } from 'react';
import { Navbar, NavLink, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

class Header extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <Container className={styles.header_container}>
        {/* <div className={styles.nav_container}> */}
        <img className={styles.header_img} src="/header-logo.png"></img>
        {/* </div> */}
        <div className={styles.header_nav}>
          {loggedIn && (
            <>
              <Navbar className={styles.header_nav}>
                <NavLink className={styles.nav_link} href="/search">
                  search
                </NavLink>
                {/* <p className={styles.nav_link}>/</p> */}
                <NavLink className={styles.nav_link} href="/profile">
                  profile
                </NavLink>
                {/* <p className={styles.nav_link}>/</p> */}
                <NavLink className={styles.nav_link} href="/logout">
                  logout
                </NavLink>
              </Navbar>
            </>
          )}
        </div>
      </Container>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
};

Header.defaultProps = {
  loggedIn: true,
};

export default Header;
