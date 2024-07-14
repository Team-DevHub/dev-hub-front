import { CommonRes } from './common.model';

export interface PostingReq {
  categoryId: number;
  title: string;
  content: string;
  links: string[];
}

export interface PostsReq {
  limit?: number;
  page?: number;
  myPage?: boolean;
  scrape?: boolean;
  search?: string;
  categoryId?: number;
}

export interface CommentReq {
  postId: number;
  content: string;
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
  isScrapped: boolean;
  comments: Comment[];
}

export interface Comment {
  commentId: number;
  content: string;
  createdAt: string;
  writer: Writer;
}

export interface Writer {
  userId: string;
  nickname: string;
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
