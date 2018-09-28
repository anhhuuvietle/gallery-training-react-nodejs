import axios from 'axios';

const instance = axios.create({
    headers: {
        token: localStorage.getItem('access-token-gallery')
    }
});

export default instance;