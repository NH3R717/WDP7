import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

class Notifications_Compose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      '': '',
    };
  }

  render() {
    const { avatar_img_blue, notification_text, sample_thumbnail } = this.props;
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
              // placeholder="Bio"
            />
            <Link to="/notifications">
              <Button className={styles.direct_message_button}>Send</Button>
            </Link>
          </FormGroup>
        </Form>
      </section>
    );
  }
}

Notifications_Compose.propTypes = {
  id: PropTypes.string,
  notification_text: PropTypes.string,
  avatar_img_blue: PropTypes.string,
  sample_thumbnail: PropTypes.string,
  loggedIn: PropTypes.bool,
};

Notifications_Compose.defaultProps = {
  loggedIn: true,
  notification_text: 'This is a notification, Notification(s)!',
  avatar_img_blue: '/avatar_blue.png',
  sample_thumbnail: '/sample_image.jpg',
};

export default Notifications_Compose;
