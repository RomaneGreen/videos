import axios from 'axios'

const KEY = 'AIzaSyDr0mvyzfW9_dpAqK4I1tr6rguWhPdoAEE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
