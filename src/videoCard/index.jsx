import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

// Styles
import styles from './videoCard.module.css';

const VideoCard = (props) => {
  const { video, primaryCardButton, addToFavouriteButton, handleSelectedVideo, addVideoToFavourite, eliminateFromFavourite, eliminateFromFavouriteButton } = props;

  return (
    <div>
      <Card
        className={ styles.card }
      >
        <CardImg
          className={ styles.cardImage }
          src={ video.snippet.thumbnails.medium.url }
          alt={ video.kind }
        />
        <CardBody
          className={ styles.cardBody }
        >
          <CardTitle>{ video.snippet.channelTitle }</CardTitle>
          <CardText
            className={ styles.cardText }
          >
            { video.snippet.description }
          </CardText>
          <Button
            color="primary"
            className={ styles.cardButton }
            onClick={ () => handleSelectedVideo(video) }
          >
            { primaryCardButton }
          </Button>
          <Button
            color="success"
            className={ styles.cardButton }
            onClick={ () => addVideoToFavourite(video) }
          >
            { addToFavouriteButton }
          </Button>
          <Button
            color="danger"
            className={ styles.cardButton }
            onClick={ () => eliminateFromFavourite(video) }
          >
            { eliminateFromFavouriteButton }
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

// PropTypes
VideoCard.propTypes = {
  /** Selected Video Handler */
  handleSelectedVideo: PropTypes.func,
  /** The Main Card Button Text */
  primaryCardButton: PropTypes.string,
  /** The video object */
  video: PropTypes.object
};

// Default PropTypes
VideoCard.defaultProps = {
  handleSelectedVideo: null,
  primaryCardButton: null,
  video: null
};

export default VideoCard;