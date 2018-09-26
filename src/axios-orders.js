import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-app-burger-builder.firebaseio.com/'
})

export default instance;