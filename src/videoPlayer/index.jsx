import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron } from 'reactstrap';

// Styles
import styles from './videoPlayer.module.css';

const VideoPlayer = ({video}) => {
  let content = null

  if (!video) {
    content = <h3>Choose a Video and improve your skills</h3>;
  } else {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    content = (
      <iframe
        className={ styles.videoFrame }
        src={videoSrc}
        allowFullScreen
        title='Video player'
      />
    )
  }

  return (
    <Jumbotron
      className={ video ? styles.videoWrapper : null }
    >
      { content }
    </Jumbotron>
  )
}

// PropTypes
VideoPlayer.propTypes = {
  /** The video object */
  video: PropTypes.object
};

// Default PropTypes
VideoPlayer.defaultProps = {
  video: null
};

export default VideoPlayer;