import axios from 'axios';

const url = 'http://localhost:5000/posts';

// need to dispatch redux actions
// good for scalability
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost); 