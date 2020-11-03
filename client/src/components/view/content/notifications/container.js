import { connect } from 'react-redux';
import {
  fetchNotifications,
  // fetchNotification
  createNotification,
  updateNotification,
  deteteNotification,
} from '../../../../store/notifications/actions';

function mapStateToProps(state, props) {
  // const {
  //   match: {
  //     params: { id },
  //   },
  // } = props;
  // const {
  //   notifications: {
  //     byId: { [id]: { data: notification } = {} },
  //   },
  // } = state;
  const { notifications } = state;
  // console.log('id' + id);
  // turn the array of ids into an array of objects
  console.log('22 notifications container.js ' + JSON.stringify(state));
  // console.log('23 notifications container.js ' + JSON.stringify(notifications));
  // console.log('23 notifications container.js ' + JSON.stringify(notification));
  return {
    // notification,
    notifications,
  };
}

// set the actions we need in this component
const mapDispatchToProps = {
  fetchNotifications,
  // fetchNotification,
  // createNotification,
  // updateNotification,
  // deteteNotification,
};
export default connect(mapStateToProps, mapDispatchToProps);
