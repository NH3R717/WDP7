import { connect } from 'react-redux';
import { createNotification } from '../../../../store/notifications/actions';

// This is how you bring state into your component. @state is global state.
function mapStateToProps(state) {
  // Snapshot of state
  // Pick the areas of state you need in these components
  const {
    notifications: { demoString },
  } = state;
  // Return it for use in the connected components
  return { demoString };
}

// This is how we give components access to Actions
const mapDispatchToProps = {
    createNotification,
    
};

export default connect(mapStateToProps, mapDispatchToProps);
