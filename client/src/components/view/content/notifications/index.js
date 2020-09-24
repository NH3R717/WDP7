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
      // avatar_img_blue,
      // avatar_img_red,
      avatar,
      notification_text,
      thumbnail,
    } = this.props;
    return (
      <section className={styles.card_container}>
        {/* notification */}

        <Card Card className={styles.card_container}>
          <div>
            <CardBody className={styles.card_head}>
              <img
                className={styles.avatar_img}
                src={avatar}
                alt="user avatar"
              />
              <CardTitle className={styles.notification_text}>
                {notification_text}
              </CardTitle>
              <img
                className={styles.card_thumb}
                src={thumbnail}
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
                src={avatar}
                alt="user avatar"
              />
              <CardTitle className={styles.notification_text}>
                {notification_text}
              </CardTitle>
              <div className={styles.card_thumb} />
            </CardBody>
          </div>
        </Card>
      </section>
    );
  }
}

NotificationsList.propTypes = {
  id: PropTypes.string,
  // name1: PropTypes.string,
  // name2: PropTypes.string,
  notification_text: PropTypes.string,
  avatar: PropTypes.string,
  thumbnail: PropTypes.string,
  loggedIn: PropTypes.bool,
};

NotificationsList.defaultProps = {
  loggedIn: true,
  // notification_text: 'Here is a notification, now you know!',
  // avatar_img_blue: '/avatar_blue.png',
  // avatar_img_red: '/avatar_red.png',
  // avatar_img_green: '/avatar_green.png',
  // sample_thumbnail: '/sample_image.jpg',
  notifications: [],
};

export default NotificationsList;
