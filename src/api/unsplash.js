import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID aY3mnX2iIv_3LCuJlFmYJOc5gWi7mDcG09Ra1ukzzqU',
  },
});
