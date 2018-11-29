import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
 
  return (() => {
    $.get('https://www.googleapis.com/youtube/v3/search', {
      q: q,
      key: YOUTUBE_API_KEY,
      type: 'video',
      part: 'snippet'
    }, (data) => { data.items; });
  });

  //return searchYouTube(YOUTUBE_API_KEY, q, (data) => { data.items; });

};

export default handleVideoSearch;
