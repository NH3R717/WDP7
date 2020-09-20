import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  // CardSubtitle,
  CardText,
  CardLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

class Direct_Message extends Component {
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
      name1,
      name2,
      sample_thumbnail,
      direct_message1,
      direct_message2,
    } = this.props;
    return (
      <section className={styles.card_container}>
        {/* name1 */}
        <Card className={styles.direct_message_container}>
          <div>
            <CardBody className={styles.card_head}>
              <img
                className={styles.avatar_img}
                src={avatar_img_blue}
                alt="user avatar"
              />
              <CardTitle className={styles.notification_text}>
                {name1}
              </CardTitle>
              <img
                className={styles.card_thumb}
                src={sample_thumbnail}
                alt="notification media thumbnail"
              />
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
            </CardBody>
          </div>
          <CardBody className={styles.user_bio_container}>
            <CardText className={styles.direct_message}>
              {direct_message1}
            </CardText>
          </CardBody>
        </Card>
        {/* name 2 */}
        <Card className={styles.direct_message_container}>
          <div>
            <CardBody className={styles.card_head}>
              <img
                className={styles.avatar_img}
                src={avatar_img_red}
                alt="user avatar"
              />
              <CardTitle className={styles.notification_text}>
                {name2}
              </CardTitle>
              <div
                className={styles.card_thumb}
                // src={sample_thumbnail}
                // alt="notification media thumbnail"
              />
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
            </CardBody>
          </div>
          <CardBody className={styles.user_bio_container}>
            <CardText className={styles.direct_message}>
              {direct_message2}
            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
}

Direct_Message.propTypes = {
  id: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  direct_message: PropTypes.string,
  avatar_img_blue: PropTypes.string,
  sample_thumbnail: PropTypes.string,
  loggedIn: PropTypes.bool,
};

Direct_Message.defaultProps = {
  loggedIn: true,
  name1: 'Captain B.',
  name2: 'Yoshi Toranaga',
  direct_message1:
    'Crimp keel black jack lugger lad Admiral of the Black. Nelsons folly long clothes trysail yawl loot bilge. Killick red ensign nipperkin keel bring a spring upon her cable bucko. Skysail loaded to the gunwalls lugger list bilge rat tackle. Boatswain keelhaul hardtack Pieces of Eight walk the plank lanyard. Ballast gun smartly line snow warp. ',
  direct_message2:
    "Gally Sea Legs blow the man down hogshead fathom spanker. Brig boatswain trysail mizzenmast long clothes lookout. Case shot bilged on her anchor jib bilge water gangplank squiffy. Blimey log Cat o'nine tails Pieces of Eight schooner fluke.",
  avatar_img_blue: '/avatar_blue.png',
  avatar_img_red: '/avatar_green.png',
  avatar_img_green: '/avatar_red.png',
  sample_thumbnail: '/sample_image.jpg',
};

export default Direct_Message;
