import axios from 'axios';
const KEY = 'AIzaSyAZ9WEjH6uT_6niwLR_ZJ0iw7KtsV4W9Q0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY
    }
})