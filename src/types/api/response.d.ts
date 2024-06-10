export interface CommonRes {
  isSuccess: boolean;
  message: string;
}

export interface LoginRes extends CommonRes {
  userId?: string;
  accessToken?: string;
}

export interface EmailCheckRes extends CommonRes {
  result?: boolean;
}

export interface UserInfoRes extends CommonRes {
  result: {
    userId: string;
    email: string;
    joinDate: string;
    nickname: string;
    level: number;
    totalPosts: number;
    totalPoints: number;
  };
}

export interface TopFiveRes extends CommonRes {
  id: string;
  name: string;
  level: number;
  points: number;
}

export interface PostSummary {
  postId: number;
  title: string;
  categoryId: number;
  totalComments: number;
  writer: string;
  createdAt: string;
}

export interface Post {
  postId: number;
  title: string;
  content: string;
  links: string[];
  categoryId: number;
  totalComments: number;
  writer: Writer;
  createdAt: string;
  comments: Comment[];
}

export interface Comment {
  commentId: number;
  content: string;
  createdAt: string;
  writer: Writer;
}

export interface Writer {
  id: string;
  name: string;
  level: number;
}
export interface Pagination {
  currentPage: number;
  totalPosts: number;
}
export interface PostsRes extends CommonRes {
  result: PostSummary[];
  paginations: Pagination;
}

export interface PostRes extends CommonRes {
  result: Post;
}
