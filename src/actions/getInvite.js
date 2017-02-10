import ActionTypes from './contants/action_types';
import database from '../utils/firebase';

export function getInvite() {
  return dispatch => {
    dispatch(getInviteRequestedAction());
    return database.ref('/').once('value', snap => {
      const invite = snap.val();
      dispatch(getInviteFulfilledAction(invite))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getInviteRejectedAciton());
    });
  }
}

function getInviteRequestedAction() {
  return {
    type: ActionTypes.GetInviteRequested
  };
}

function getInviteRejectedAciton() {
  return {
    type: ActionTypes.GetInviteRejected
  };
}

function getInviteFulfilledAction(invite) {
  return {
    type: ActionTypes.GetInviteFulfilled,
    invite
  };
}