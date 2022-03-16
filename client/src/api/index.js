import axios from 'axios';

const url = 'https://project-memories-kevin.herokuapp.com/posts';

// need to dispatch redux actions
// good for scalability
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost); 
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)