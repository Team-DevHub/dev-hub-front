export interface LoginReq {
  email: string;
  password: string;
}

export interface JoinReq {
  nickname: string;
  email: string;
  password: string;
}

export interface RequestResetReq {
  email: string;
  nickname: string;
}

export interface PostingReq {
  categoryId: number;
  title: string;
  content: string;
  links: string[];
}

export interface PostsReq {
  limit: number;
  page: number;
  myPage?: boolean;
  search?: string;
  categoryId?: number;
}

export interface CommentReq {
  postId: number;
  content: string;
}
