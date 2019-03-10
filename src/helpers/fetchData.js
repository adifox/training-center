import youtube from '../api';

const fetchData = async (searchQuery) => {
  const response = await youtube.get('/search', {
    params: {
      q: searchQuery
    }
  })
  return response
};

export default fetchData;