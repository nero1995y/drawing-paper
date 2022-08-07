export const SET_POSTS_LIST = 'posts/SET_POSTS_LIST';

export function setPostList(posts) {
  return {
    type: SET_POSTS_LIST,
    payload: posts,
  };
}
