import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

class Header extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <Container>
        <Nav navbar>
          {/* <NavItem>
            <Link to="/">Logout</Link>
          </NavItem> */}
          {loggedIn && (
            <>
              <Navbar>
                <NavItem>
                  <Link to="/search">profile</Link>
                </NavItem>
                <NavItem>
                  <Link to="/profile">search</Link>
                </NavItem>
                <NavItem>
                  <Link to="/logout">logout</Link>
                </NavItem>
              </Navbar>
            </>
          )}
        </Nav>
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
