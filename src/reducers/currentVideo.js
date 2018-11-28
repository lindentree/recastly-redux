import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.

  switch (action.type) {

  case 'CHANGE_VIDEO':
    const newState = Object.assign({}, state);
    newState.currentVideo = action.video;
    state = newState;
    break;

  default:
    state = null;

  }
  
  if (state !== null) {
    return state.currentVideo;
  }

  return state;
  
};

export default currentVideoReducer;
