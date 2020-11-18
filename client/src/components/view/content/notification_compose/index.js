import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

// Import the Container for this component
import container from './compose_container';

class Notifications_Compose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationValue: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.newNotification = this.newNotification.bind(this);
  }
// ! two ways, same result
  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({
      notificationValue: event.target.value,
    });
  }

  newNotification = () => {
    this.props.createNotification(this.state.notificationValue);
  };

  render() {
    // const {} = this.props;
    return (
      <section className={styles.card_container}>
        <h2>Compose Notification</h2>
        <Form>
          <FormGroup className={styles.direct_message_input_container}>
            <Input
              className={styles.direct_message_input}
              type="text"
              name="direct_message_input"
              id="direct_message_input"
              onChange={this.handleInputChange}
              // placeholder=""
            />
            <Link to="/notifications">
              <Button
                className={styles.direct_message_button}
                onClick={this.newNotification}
              >
                Send
              </Button>
            </Link>
          </FormGroup>
        </Form>
      </section>
    );
  }
}

Notifications_Compose.propTypes = {
  // id: PropTypes.string,
  loggedIn: PropTypes.bool,
};

// ! update
Notifications_Compose.defaultProps = {
  loggedIn: true,
};

export default container(Notifications_Compose);
