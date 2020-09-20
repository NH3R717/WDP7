import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  // CardSubtitle,
  // CardText,
  CardLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';
import { Link } from 'react-router-dom';

class Direct_Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      '': '',
    };
  }

  render() {
    const {
      name1,
      name2,
      name3,
      avatar_img_blue,
      avatar_img_red,
      avatar_img_green,
      notification_text,
      sample_thumbnail,
    } = this.props;
    return (
      <section className={styles.card_container}>
        {/* notification */}
        <Card className={styles.direct_message_container}>
          <div>
            <CardLink
              className={styles.contacts_card_link}
              href="/direct-message-compose"
            >
              <CardBody className={styles.card_head}>
                <img
                  className={styles.avatar_img}
                  src={avatar_img_blue}
                  alt="user avatar"
                />
                <CardTitle className={styles.notification_text}>
                  {name1}
                </CardTitle>
                <div
                  className={styles.card_thumb}
                  // src={sample_thumbnail}
                  // alt=""
                />
              </CardBody>
            </CardLink>
          </div>
        </Card>
      </section>
    );
  }
}

Direct_Message.propTypes = {
  id: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  name3: PropTypes.string,
  direct_message: PropTypes.string,
  avatar_img_blue: PropTypes.string,
  avatar_img_red: PropTypes.string,
  avatar_img_green: PropTypes.string,
  loggedIn: PropTypes.bool,
};

Direct_Message.defaultProps = {
  loggedIn: true,
  name1: 'Captain B.',
  name2: 'Yoshi Toranaga',
  name3: 'Toda Mariko',
  avatar_img_blue: '/avatar_blue.png',
  avatar_img_red: '/avatar_green.png',
  avatar_img_green: '/avatar_red.png',
  sample_thumbnail: '/sample_image.jpg',
};

export default Direct_Message;
