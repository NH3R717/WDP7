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
  if(allIds.length > 0){
    const notificationsArray = Object.entries(byId);
    return { notificationsArray };
  }
}
const mapDispatchToProps = {
  fetchNotifications,
  createNotification,
  updateNotification,
  deleteNotification,
};
export default connect(mapStateToProps, mapDispatchToProps);