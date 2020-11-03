import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

// Import the Container for this component
import container from './container';

class Login_Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: true,
    };
  }

  render() {
    const { register } = this.state;
    // state from redux will be on props. This is why our container function is called "MapStateToProps"
    const { demoString } = this.props;
    // Snapshot of value
    console.log({ demoString });
    return (
      <section>
        {/* login */}
        <Container className={styles.form_container}>
          {!register && (
            <>
              <section className={styles.form_box}>
                <h2>Login</h2>
                <Form>
                  <FormGroup>
                    <Input
                      className={styles.input}
                      // type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className={styles.input}
                      // type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <Link to="/notifications">
                    <Button
                      className={styles.left_button + ' ' + styles.button}
                    >
                      Register
                    </Button>
                  </Link>
                  <Link to="/notifications">
                    <Button
                      className={styles.right_button + ' ' + styles.button}
                    >
                      Login
                    </Button>
                  </Link>
                </Form>
              </section>
            </>
          )}
        </Container>
        {/* registration */}
        <Container className={styles.form_container}>
          {register && (
            <>
              <section className={styles.form_box}>
                <h2>Register</h2>
                <Form>
                  <FormGroup>
                    <Input
                      className={styles.input}
                      // type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className={styles.input}
                      // type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      className={styles.input}
                      // type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Reenter Password"
                    />
                  </FormGroup>
                  <Link to="/">
                    <Button
                      className={styles.right_button + ' ' + styles.button}
                    >
                      Cancel
                    </Button>
                  </Link>
                  <Link to="/notifications">
                    <Button
                      className={styles.left_button + ' ' + styles.button}
                    >
                      Register
                    </Button>
                  </Link>
                </Form>
              </section>
            </>
          )}
        </Container>
      </section>
    );
  }
}

Login_Register.propTypes = {
  register: PropTypes.bool,
};

// Login_Register.defaultProps = {
//   register: false,
// };

// export default Login_Register;
// Wrap your component with the container
export default container(Login_Register);
