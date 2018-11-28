import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {

  var newState = Object.assign({}, state);
  switch (action.type) {

  case 'CHANGE_VIDEO_LIST': 
    newState.videos = action.videos;
    state = newState;
    break;

  default:  
    state.videos = [];
  }
  
  return state.videos;

};

export default videoListReducer;
