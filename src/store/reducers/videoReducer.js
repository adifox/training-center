import * as actionTypes from '../types/videoActionTypes';

const initialState = {
  videos: []
}

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_VIDEOS_SUCCESS:
    return {
      ...state,
      videos: action.videos
    };
    case actionTypes.REQUEST_VIDEOS_ERROR:
      console.log('SOMETHING WENT WRONG [AT VIDEO REQUEST]:', action.error)
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
};

export default videoReducer;