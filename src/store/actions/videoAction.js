import fetchData from '../../helpers/fetchData';
import * as actionTypes from '../types/videoActionTypes';

function setVideos(videos) {
  return {
    type: actionTypes.REQUEST_VIDEOS_SUCCESS,
    videos
  }
}

function requestVideosFailed(error) {
  return {
    type: actionTypes.REQUEST_VIDEOS_ERROR,
    error
  }
}

export const requestVideos = (searchQuery) => {
  return dispatch => {
    fetchData(searchQuery)
    .then((response) => {
      dispatch(setVideos(response.data))
    })
    .catch( error => {
      dispatch(requestVideosFailed(error))
    })
  }
}