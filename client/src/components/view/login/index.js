import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Login_Register extends Component {
  render() {
    const { register } = this.props;
    return (
      <Container className={styles.form_container}>
        {!register && (
          <>
            <section className={styles.form_box}>
              <h2>Login</h2>
              <Form>
                <FormGroup>
                  <Input
                    className={styles.input}
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className={styles.input}
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                  />
                </FormGroup>
                <Button className={styles.button}>Login</Button>
              </Form>
            </section>
          </>
        )}
      </Container>
    );
  }
}

Login_Register.propTypes = {
  register: PropTypes.bool,
};

Login_Register.defaultProps = {
  register: false,
};

export default Login_Register;
