import axios from 'axios';
const baseUrl = '/api/blogs';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    console.log(response);
    return response.data;
  });
};

export default { getAll };
