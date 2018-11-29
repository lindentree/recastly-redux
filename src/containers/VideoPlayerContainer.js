import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = () => {};

var mapStateToProps = function(state) {
  return {
    currentVideo: state.currentVideo
  };
};

var mapDispatchToProps = function(dispatch) {
  return {
    src: `https://www.youtube.com/embed/${state.currentVideo.id.videoId}`
  };
};


//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
