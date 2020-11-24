import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_VIDEOS } from '../actions/video_actions';
import { RECEIVE_USERS, RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = {...state}
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser;
      return newState
    case RECEIVE_VIDEOS:
      return Object.assign({}, state, action.users);
    case RECEIVE_USERS:
      return Object.assign({}, state, action.users);
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState
    case REMOVE_USER:
      delete newState[action.userId]
      return newState
    default:
      return state;
  }
}