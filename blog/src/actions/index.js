import jsonPlaceholder from '../apis/jsonPlaceholder';
// import '' from 'redux-thunk';

export const fetchPosts =  () => {

const promise =  jsonPlaceholder.get('/posts')
    return {
        type: 'FETCH_POSTS',
        payload: promise
    };
};