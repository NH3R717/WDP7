import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
} from 'reactstrap';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Default_Comp extends Component {
  render() {
    return (
      <section className={styles.card_container}>
        {/* notification */}
        <Card>
          <div>
            <CardBody className={styles.card_head}>
              <img
                className={styles.avatar_img}
                src="/avatar_blue.png"
                alt="Card image cap"
              />
              <CardTitle className={styles.notification_message}>
                This is a notification, letting you know.
              </CardTitle>
              <img
                className={styles.card_thumb}
                src="/sample_image.jpg"
                alt="Card image cap"
              />
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
            </CardBody>
          </div>
          {/* <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody> */}
        </Card>
      </section>
    );
  }
}

Default_Comp.propTypes = {
  id: PropTypes.string,
};

Default_Comp.defaultProps = {
  choice: {},
};

export default Default_Comp;
