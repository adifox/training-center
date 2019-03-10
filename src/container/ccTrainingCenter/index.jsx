import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Badge, Media } from 'reactstrap';
import { connect } from 'react-redux';

// Components
import VideoCard from '../../components/videoCard';
import VideoPlayer from '../../components/videoPlayer';

// Actions
import * as actions from '../../store/actions/videoAction';

// Styles
import styles from './ccTrainingCenter.module.css';

class CcTrainingCenter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedVideo: null,
      favouriteVideos: []
    }
    this.ccSearchQuery = 'Command and Conquer Rivals Excoundrel'
  }

  componentDidMount() {
    this.props.fetchVideos(this.ccSearchQuery)
  }

  handleSelectedVideo = (video) => {
    this.setState({selectedVideo: video})
  }

  addVideoToFavourite = (video) => {
    this.setState({ favouriteVideos: [...this.state.favouriteVideos, video] })
  }

  eliminateFromFavourite = (video) => {
    const updatedFavouriteList = this.state.favouriteVideos.filter((element) => element.id.videoId ? element.id.videoId !== video.id.videoId : element.id.channelId !== video.id.channelId)

    this.setState({
      favouriteVideos: updatedFavouriteList
    })
  }

  createVideoCards = (content) => (
    content.map((element) => (
      <Col
        key={ element.id.videoId ? element.id.videoId : element.id.channelId }
        xs="4"
      >
        <VideoCard
          video={ element }
          primaryCardButton={ 'Play' }
          addToFavouriteButton={ '+ Favourite' }
          eliminateFromFavouriteButton={ '- Favourite' }
          handleSelectedVideo={ this.handleSelectedVideo }
          addVideoToFavourite={ this.addVideoToFavourite }
          eliminateFromFavourite={ this.eliminateFromFavourite }
        />
      </Col>
    ))
  )

  createFavouriteVidsList = (content) => (
    content.map((element) => (
      <Media
        key={ element.id.videoId ? element.id.videoId : element.id.channelId }
      >
        <Media
          object
          src={ element.snippet.thumbnails.default.url }
          alt="Generic placeholder image"
        />
        <Media>
          { element.snippet.channelTitle }
        </Media>
      </Media>
    ))
  )
  
  render() {
    const videoCards = this.props.videos ? this.createVideoCards(this.props.videos) : null
    const favouriteVideos = this.state.favouriteVideos ? this.createFavouriteVidsList(this.state.favouriteVideos) : null
    const error = this.props.error ? (
      <h2 className={ styles.errorText }>No Videos available at the moment, please try again later.</h2>
    ) : null

    return (
      <div className={ styles.contentWrapper }>
        <Container>
          <h2
            className={ styles.mainTitle }
          >Welcome to your Training Center</h2>
          <Row>
            <Col>
              <VideoPlayer
                video={ this.state.selectedVideo }
              />
            </Col>
            <Col>
              <Jumbotron
                className={ styles.myListWrapper }
              >
                <h4>My Video List</h4>
                <h5>Training Videos available:
                  <Badge color="secondary">{ this.props.videos ? this.props.videos.length : 0 }</Badge>
                </h5>
                <h5>My favourite Videos:
                  <Badge color="secondary">{ this.state.favouriteVideos ? this.state.favouriteVideos.length : 0 }</Badge>
                </h5>
                { favouriteVideos }
              </Jumbotron>
            </Col>
            { error }
          </Row>
          <Row>
            { videoCards }
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    videos: state.videos.items,
    error: state.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchVideos: (searchQuery) => dispatch(actions.requestVideos(searchQuery))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CcTrainingCenter);