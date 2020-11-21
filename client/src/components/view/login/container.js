import { connect } from 'react-redux';
import { loginUser } from '../../../store/auth/actions';

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
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps);
