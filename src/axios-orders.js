import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-demo-44674.firebaseio.com/'
})

export default instance;