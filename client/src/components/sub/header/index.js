import React, { Component } from 'react';
import { Navbar, NavLink, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Header extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <Container className={styles.header_container}>
        <header className={styles.header_nav}>
          {loggedIn && (
            <>
              <Navbar className={styles.header_nav}>
                <NavLink className={styles.nav_link} href="https://superscafe.com/">
                  home
                </NavLink>
                <NavLink className={styles.nav_link} href="/profile">
                  profile
                </NavLink>
                <NavLink className={styles.nav_link} href="/logout">
                  logout
                </NavLink>
                <NavLink className={styles.nav_link} href="https://superscafe.com/pages/profile.html">
                  portfolio
                </NavLink>
                <NavLink className={styles.nav_link} href="https://superscafe.com/pages/about.html">
                  about
                </NavLink>
                <NavLink className={styles.nav_link} href="https://superscafe.com/pages/contact.html">
                  contact
                </NavLink>
              </Navbar>
            </>
          )}
        </header>
        <div>
          <img
            className={styles.header_img}
            src="/header-logo.png"
            alt="logo"
          ></img>
        </div>
      </Container>
    );
  }
}

Header.propTypes = {
  id: PropTypes.string,
  loggedIn: PropTypes.bool,
};

Header.defaultProps = {
  loggedIn: true,
};

export default Header;
