import React, { Component } from 'react';
import {
  Button,
  Input,
  Card,
  CardBody,
  CardTitle,
  Container,
  Form,
  FormGroup,
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

  createNotification() {
    console.log('this.state.notificationValue: ', this.state.notificationValue);
    this.props.createNotification(this.state.notificationValue);
  }

  updateNotification(id) {
    const notification = {id, messageText: this.state.notificationValue[0]}
    // console.log('############# this.state.notificationValue: ', notification);
    this.props.updateNotification(notification);
  }

  deleteNotification(id) {
    console.log('this.state.notificationValue: ', id);
    this.props.deleteNotification(this.state.notificationValue);
  }

  render() {
    const { notificationsArray } = this.props;
    console.log('ui notificationsArray: ', notificationsArray);
    console.log('props: ', this.props);
    // pull the data from state
    // let testArray = [
    //   'Head to the clients location.',
    //   'Have you arrived?',
    //   'Meet Jane at the gate.',
    // ];
    return (
      <section className={styles.card_container}>
        <Container>
          {/* {notifications.map((notification) => ( */}
          {notificationsArray ? (
            notificationsArray.map((notification) => (
              <>
              {console.log("notifications/index.js", notification[1].data)}
                {/* <p>make</p>
            <p>notificationId: {notification[1].data.notificationId}</p> */}
                {/* <ul> */}
                <Card>
                  <div>
                    <CardBody className={styles.card_head}>
                      <Button
                        className={styles.direct_message_button}
                        onClick={() => this.updateNotification(notification[0])}
                      >
                        Update
                      </Button>
                      <Button
                        className={styles.direct_message_button}
                        onClick={() => this.deleteNotification(notification[0])}
                      >
                        Delete
                      </Button>
                      <p className={styles.notification_text}>
                        "notificationId": {notification[1].data.flags}
                      </p>
                    </CardBody>
                  </div>
                </Card>
                {/* </ul> */}
              </>
            ))
          ) : (
            <p>Wait...</p>
          )}

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
                  onClick={this.createNotification}
                >
                  Add
                </Button>
              </Link>
            </FormGroup>
          </Form>
        </Container>
      </section>
    );
  }
}
// console.log('Redux State Notifications ', notification);
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
  loggedIn: PropTypes.bool,
};

NotificationsList.defaultProps = {
  notifications: [],
};

export default container(NotificationsList);
