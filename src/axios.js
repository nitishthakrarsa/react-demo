import axiso from 'axios';

const instance = axiso.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'Auth Token';


export default instance;