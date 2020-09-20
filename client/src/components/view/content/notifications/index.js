import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  // CardSubtitle,
  // CardText,
  // CardLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

class NotificationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      '': '',
    };
  }

  render() {
    const {
      avatar_img_blue,
      avatar_img_red,
      notification_text,
      sample_thumbnail,
    } = this.props;
    return (
      <section className={styles.card_container}>
        {/* notification */}

        <Card Card className={styles.card_container}>
          <div>
            <CardBody className={styles.card_head}>
              <img
                className={styles.avatar_img}
                src={avatar_img_blue}
                alt="user avatar"
              />
              <CardTitle className={styles.notification_text}>
                {notification_text}
              </CardTitle>
              <img
                className={styles.card_thumb}
                src={sample_thumbnail}
                alt="notification media thumbnail"
              />
            </CardBody>
          </div>
        </Card>
        <Card className={styles.card_container}>
          <div>
            <CardBody className={styles.card_head}>
              <img
                className={styles.avatar_img}
                src={avatar_img_red}
                alt="user avatar"
              />
              <CardTitle className={styles.notification_text}>
                {notification_text}
              </CardTitle>
              <div
                className={styles.card_thumb}
                // src={sample_thumbnail}
                // alt="notification media thumbnail"
              />
            </CardBody>
          </div>
        </Card>
      </section>
    );
  }
}

NotificationsList.propTypes = {
  id: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  direct_message: PropTypes.string,
  avatar_img_blue: PropTypes.string,
  avatar_img_red: PropTypes.string,
  avatar_img_green: PropTypes.string,
  sample_thumbnail: PropTypes.string,
  loggedIn: PropTypes.bool,
};

NotificationsList.defaultProps = {
  loggedIn: true,
  notification_text: 'Here is a notification, now you know!',
  avatar_img_blue: '/avatar_blue.png',
  avatar_img_red: '/avatar_red.png',
  avatar_img_green: '/avatar_green.png',
  sample_thumbnail: '/sample_image.jpg',
};

export default NotificationsList;
