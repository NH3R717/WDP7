// import axios from 'axios';
import { connect } from 'react-redux';
import {
  fetchNotifications,
  createNotification,
  updateNotification,
  deleteNotification,
} from '../../../../store/notifications/actions';

const mapStateToProps = (state, props) => {

    const { notifications } = state;
    const { allIds, byId } = notifications;

  console.log("NOTIFICATIONS", notifications)
  console.log("PROPS", props)
  console.log("allIds", allIds)
  
  if(allIds.length > 0){
    const notificationsArray = Object.entries(byId);
    return { notificationsArray };
  }
}
// // set the actions we need in this component
const mapDispatchToProps = {
  fetchNotifications,
  createNotification,
  updateNotification,
  deleteNotification,
};
export default connect(mapStateToProps, mapDispatchToProps);