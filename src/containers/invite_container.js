import { connect } from 'react-redux';
import Invite from '../components/invite';

function mapStateToProps(state) {
  return {
    invite: state.invite
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetInvite: () => dispatch(onGetInvite()),
  };
}

const inviteContainer = connect(mapStateToProps, mapDispatchToProps)(Invite);

componentDidMount() {
  this.props.onGetInvite();
}

export default inviteContainer;