import { connect } from 'react-redux';
import {
  fetchNotifications,
  // fetchNotification
  createNotification,
  updateNotification,
  deteteNotification,
} from '../../../../store/notifications/actions';

function mapStateToProps(state, props) {
  const {
    match: {
      params: { id },
    },
  } = props;
  const {
    notifications: {
      byId: { [id]: { data: notification } = {} },
    },
  } = state;
  // turn the array of ids into an array of objects
  return {
    notification,
  };
}

// set the actions we need in this component
const mapDispatchToProps = {
  fetchNotifications,
  // fetchNotification,
  createNotification,
  updateNotification,
  deteteNotification,
};
export default connect(mapStateToProps, mapDispatchToProps);
