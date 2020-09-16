import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Default_Comp extends Component {
  render() {
    return (
      <Container className={styles.defaulContainertStyle}>
        <H1 className={styles.defaultTextStyle}>Default_Comp</H1>
      </Container>
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
