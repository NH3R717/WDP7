import axios from 'axios';
import { connect } from 'react-redux';
import {
  fetchNotifications,
  updateNotification,
  deleteNotification,
} from '../../../../store/notifications/actions';

const mapStateToProps = async function mapStateToProps(state, props) {

    const { notifications } = state;
// mapStateToProps(state, props) {
  // const { match: { params: { id } } } = props;
  // console.log("®®®", state)
  // const {
  //   notifications: { notifications, byId },
  // } = state;
  // console.log("®®ç®", notifications)
  
  // const {
  //   notifications: {
  //     byId: { [id]: { data: notification } = {} },
  //   },
  // } = state;
  // const { notifications : {byId}, notifications } = state;
  // console.log("mapStateToProps(state, props)", byId)
  // console.log("mapStateToProps(state, props)", notifications.allIds)
  // if(notifications.length > 1) {

    // const asyncArray = await Promise.all(notifications.map(async (notifications) => {
    //   // await sleep(10);
    //   return notifications;
    // }));

  // notifications.allIds.map(id => console.log("EACH ID",id))
  // }
  // const mappedNotifications = notifications.allIds.map(id => byId[id]);
  // console.log("mapStateToProps(state, props)", mappedNotifications)
  // return { notifications: mappedNotifications };
  return { notifications };
}
// // set the actions we need in this component
const mapDispatchToProps = {
  fetchNotifications,
  updateNotification,
  deleteNotification,
};
export default connect(mapStateToProps, mapDispatchToProps);

// import { connect } from 'react-redux';
// import {
//   fetchNotifications,
//   updateNotification,
//   deleteNotification,
// } from '../../../../store/notifications/actions';

// function mapStateToProps(state, props) {
//   // const {
//   //   match: {
//   //     params: { id },
//   //   },
//   // } = props;
//   // const {
  //   notifications: {
  //     byId: { [id]: { data: notification } = {} },
  //   },
  // } = state;
//   const { notifications } = state;
//   // console.log('id' + id);
//   // turn the array of ids into an array of objects
//   // console.log('22 notifications container.js ' + JSON.stringify(state));
//   // console.log('23 notifications container.js ' + JSON.stringify(notifications));
//   // console.log('23 notifications container.js ' + JSON.stringify(notification));
//   return {
//     notifications,
//   };
// }

// // set the actions we need in this component
// const mapDispatchToProps = {
//   fetchNotifications,
//   updateNotification,
//   deleteNotification,
// };
// export default connect(mapStateToProps, mapDispatchToProps);

// export default function container(Component) {
//   return class NotificationsContainer extends React.Component {
//     state= {
//       notifications: {},
//     }

//     fetchNotifications = async (id) => {
//       const notification = await API.get(`notifications`);
//       this.setState({ notifications });
//     }

//     deleteNotifications = async (id) => {
//       await API.delete(`/notifications/${id}`);
//     }


//     render() {
//       const { notifications } = this.state;
//       return (
//         <Component
//           {...this.props}
//           notification={notification}
//           fetchNotifications={this.fetchNotifications}
//           updateNotification={this.updateNotification}
//           deleteNotification={this.deleteNotification}
//         />
//       );
//     }
//   };
// }