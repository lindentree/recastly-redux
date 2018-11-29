import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var sampleData = exampleVideoData;

var videoListReducer = (state = [], action) => {

  switch (action.type) {

  case 'CHANGE_VIDEO_LIST':
    return action.videos || state;
    break;

  default:  
    return state;
  }
  
};

export default videoListReducer;
