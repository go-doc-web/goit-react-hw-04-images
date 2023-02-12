import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
});

export const searchImages = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
      key: '18725015-a08852ce69505435b84afef2d',

      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
    },
  });
  return data;
};

// https://pixabay.com/api?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
