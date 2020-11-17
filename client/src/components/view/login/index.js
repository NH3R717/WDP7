import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

// Import the Container for this component
import container from './container';

class Login_Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // ! make this dynamic
      register: false,
    };
  }

  handleInputChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({
      [name]: value,
    });
  };

  // ! it logs in set so that acceptable error when incorrect info used
  loginButton = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { loginUser } = this.props;
    console.log(email, password);
    await loginUser({email, password});
  };

  // ! switch view to register
  toRegisterButton = async (event) => {
    event.preventDefault();
    // const { email, password } = this.state;
    // const { loginUser } = this.props;
    // console.log(email, password);
    // await loginUser({email, password});
  };

  // ! switch view to register
  registerButton = async (event) => {
    event.preventDefault();
    // const { email, password } = this.state;
    // const { loginUser } = this.props;
    // console.log(email, password);
    // await loginUser({email, password});
  };

  // ! open view for sending user to password reset
  resetPassButton = async (event) => {
    event.preventDefault();
    // const { email, password } = this.state;
    // const { loginUser } = this.props;
    // console.log(email, password);
    // await loginUser({email, password});
  };

  // ! set view back to login
  backToLoginButton = async (event) => {
    event.preventDefault();
    // const { email, password } = this.state;
    // const { loginUser } = this.props;
    // console.log(email, password);
    // await loginUser({email, password});
  };

  // ! open view for sending user to password reset
  resetPassButton = async (event) => {
    event.preventDefault();
    // const { email, password } = this.state;
    // const { loginUser } = this.props;
    // console.log(email, password);
    // await loginUser({email, password});
  };

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
                      onChange={this.handleInputChange}
                      className={styles.input}
                      // type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      onChange={this.handleInputChange}
                      className={styles.input}
                      // type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <Button
                    className={styles.left_button + ' ' + styles.button}
                    onClick={this.toRegisterButton}
                  >
                    Register
                  </Button>
                  <Button
                    className={styles.center_button}
                    onClick={this.resetButton}
                  >
                    Rest
                  </Button>
                  <Button
                    className={styles.right_button + ' ' + styles.button}
                    onClick={this.loginButton}
                  >
                    Login
                  </Button>
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
                      // type="username"
                      name="username"
                      id="examplePassword"
                      placeholder="Username"
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
                  <Button
                    className={styles.right_button + ' ' + styles.button}
                    onClick={this.backToLoginButton}
                  >
                    Cancel
                  </Button>
                  <Button
                    className={styles.left_button + ' ' + styles.button}
                    onClick={this.registerButton}
                  >
                    Register
                  </Button>
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
