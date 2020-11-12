import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

// Import the Container for this component
import container from './container';

class Notifications_Compose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'notificationValue': '',
    };

    this.handeInputChange = this.handeInputChange.bind(this);
    this.newNotification = this.newNotification.bind(this);
  }

  handeInputChange(event) {
    console.log(event.target.value)
    this.setState({
      'notificationValue' : event.target.value
    });
  }

  newNotification(){
    console.log('this.state.notificationValue: ', this.state.notificationValue)
    this.props.createNotification(this.state.notificationValue);
  }

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
              onChange={this.handeInputChange}
              // placeholder=""
            />
            <Link to="/notifications">
              <Button className={styles.direct_message_button} onClick={this.newNotification}>Send</Button>
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

Notifications_Compose.defaultProps = {
  loggedIn: true,
};

export default container(Notifications_Compose);
