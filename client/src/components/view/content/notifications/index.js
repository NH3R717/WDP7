import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  // CardSubtitle,
  // CardText,
  // CardLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';
import container from './container';

class NotificationsList extends Component {
  componentDidMount() {
    const { fetchNotifications } = this.props;
    fetchNotifications();
  }

  render() {
    const { notifications } = this.props;
    return (
      <section className={styles.card_container}>
        {/* notification */}

        <Container>
          {notifications.map((notification) => (
            <Card>
              <div>
                <CardBody className={styles.card_head}>
                  <img
                    className={styles.avatar_img}
                    src={notification.avatar}
                    alt="user avatar"
                  />
                  <CardTitle className={styles.notification_text}>
                    {notification.notification_text}
                  </CardTitle>
                  <img
                    className={styles.card_thumb}
                    src={notification.thumbnail}
                    alt="notification media thumbnail"
                  />
                </CardBody>
              </div>
            </Card>
          ))}

          {/* <Card className={styles.card_container}>
          {notifications.map((notification) => (
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
          </Card> */}
          {/* ))} */}
        </Container>
      </section>
    );
  }
}

NotificationsList.propTypes = {
  // id: PropTypes.string,
  notifications: PropTypes.arrayOf(PropTypes.object),
  fetchNotifications: PropTypes.func.isRequired,
  // createNotifications: PropTypes.func.isRequired,
  // deleteNotifications: PropTypes.func.isRequired,
  // notification_text: PropTypes.string,
  // avatar: PropTypes.string,
  // thumbnail: PropTypes.string,
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

export default container(NotificationsList);
