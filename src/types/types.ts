export interface User {
  id: number;
  username: string;
}

export interface Post {
  id?: number;
  userId?: number;
  title: string;
  body: string;
}

export interface PostComment {
  postId: number;
  id: number;
  name: string;
  body: string;
}
