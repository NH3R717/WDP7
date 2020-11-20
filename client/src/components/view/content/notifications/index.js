import React, { Component } from 'react';
import {
  Button,
  Input,
  Card,
  CardBody,
  CardTitle,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';
import container from './container';

class NotificationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationValue: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateNotification = this.updateNotification.bind(this);
    this.deleteNotification = this.deleteNotification.bind(this);
  }
  // testArray = [1, 2, 3];
  async componentDidMount() {
    await this.props.fetchNotifications();
  }

  handleInputChange(event) {
    console.log(event.target.value);
    this.setState({
      notificationValue: [event.target.value],
    });
  }

  updateNotification() {
    console.log('this.state.notificationValue: ', this.state.notificationValue);
    this.props.createNotification(this.state.notificationValue);
  }
  deleteNotification() {
    console.log('this.state.notificationValue: ', this.state.notificationValue);
    this.props.createNotification(this.state.notificationValue);
  }

  render() {
    // const { notifications } = this.props;
    // pull the data from state
    let testArray = [
      'Head to the clients location.',
      'Have you arrived.',
      'Meet Jane at the gate.',
    ];
    const { notifications } = this.props;
    <section>
      <Container>
        {posts.map((testArray) => (
          <Card>
            <div>
              <CardBody className={styles.card_head}>
                {/* <img
                  className={styles.avatar_img}
                  src={notification.avatar}
                  alt="user avatar"
                /> */}
                <CardTitle className={styles.notification_text}>
                  {notification.notification_text}
                  {/* key={notification.notification_text} */}
                  {/* key={message[".key"]}>{message.text} */}
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
        {/* : null} */}
      </Container>
    </section>;
    // ! map all notifications
    console.log('Redux State Notifications ', notifications);
    return <section className={styles.card_container}></section>;
  }
}
NotificationsList.propTypes = {
  id: PropTypes.string,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      userId: PropTypes.string,
      flags: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      textNotifications: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          notificationId: PropTypes.string,
          messageText: PropTypes.string,
          createdAt: PropTypes.string,
          updatedAt: PropTypes.string,
        })
      ),
      audios: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          notificationId: PropTypes.string,
          audioLink1: PropTypes.string,
          audioLink2: PropTypes.string,
          createdAt: PropTypes.string,
          updatedAt: PropTypes.string,
        })
      ),
      images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          notificationId: PropTypes.string,
          imageLink1: PropTypes.string,
          imageLink2: PropTypes.string,
          imageLink3: PropTypes.string,
          createdAt: PropTypes.string,
          updatedAt: PropTypes.string,
        })
      ),
      videos: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          notificationId: PropTypes.string,
          videoLink1: PropTypes.string,
          videoLink2: PropTypes.string,
          createdAt: PropTypes.string,
          updatedAt: PropTypes.string,
        })
      ),
    })
  ),
  fetchNotifications: PropTypes.func.isRequired,
  // createNotifications: PropTypes.func.isRequired,
  // deleteNotifications: PropTypes.func.isRequired,
  // notification_text: PropTypes.string,
  // avatar: PropTypes.string,
  // thumbnail: PropTypes.string,
  loggedIn: PropTypes.bool,
};

NotificationsList.defaultProps = {
  // loggedIn: true,
  // notification_text: 'Here is a notification, now you know!',
  // avatar_img_blue: '/avatar_blue.png',
  // avatar_img_red: '/avatar_red.png',
  // avatar_img_green: '/avatar_green.png',
  // sample_thumbnail: '/sample_image.jpg',
  notifications: [],
};

export default container(NotificationsList);
