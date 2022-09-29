import React from 'react'; 
import YouTube from 'react-youtube';

const LiveFeed = () => {

  const opts = {
    height: '300',
    width: '550',
    playerVars: {
      autoplay: 1,
    },
  };

  return( 
    <YouTube 
      videoId="86YLFOog4GM" 
      opts={opts} 
    />
  )
    
}

export default LiveFeed; 