import { CommonRes } from './common.model';

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

export interface LoginRes extends CommonRes {
  userId?: string;
  accessToken?: string;
  refreshToken?: string;
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
