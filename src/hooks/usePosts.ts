import { useLocation } from 'react-router-dom';
import { postAPI } from '@/api/requests/postAPI';
import { useQuery } from '@tanstack/react-query';

export const usePosts = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const { data: postData } = useQuery({
    queryKey: ['posts', location.search],
    queryFn: () =>
      postAPI.posts({
        limit: 18,
        page: params.get('page') ? Number(params.get('page')) : 1,
        search: params.get('search') || '',
        categoryId: params.get('category_id')
          ? Number(params.get('category_id'))
          : undefined,
      }),
  });

  const posts = postData?.result || [];
  const pagination = postData?.pagination || { currentPage: 1, totalPosts: 0 };
  const isEmpty = posts.length === 0;

  return { posts, pagination, isEmpty };
};
