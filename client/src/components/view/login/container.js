import { connect } from 'react-redux'; // added this dependency
// For Demo Only. Import the necessary actions your components will need access to.
import { fetchNotifications } from '../../../store/notifications/actions';

// This is how you bring state into your component. @state is global state.
function mapStateToProps(state) {
  // Snapshot of state
  console.log({ state });
  // Pick the areas of state you need in these components
  const {
    notifications: { demoString },
  } = state;
  // Return it for use in the connected components
  return { demoString };
}

// This is how we give components access to Actions
const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps);
