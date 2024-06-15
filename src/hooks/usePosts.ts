import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { postAPI } from '@/api/requests/postAPI';
import { Pagination as PaginationType, PostSummary } from '@/models/post.model';

export const usePosts = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [pagination, setPagination] = useState<PaginationType>({
    currentPage: 1,
    totalPosts: 0,
  });
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const page = params.get('page') ? Number(params.get('page')) : 1;
      const search = params.get('search') || '';
      const categoryId = params.get('category_id')
        ? Number(params.get('category_id'))
        : undefined;

      const data = await postAPI.posts({
        limit: 18,
        page,
        search,
        categoryId,
      });

      setPosts(data.result);
      setPagination(data.pagination);
      setIsEmpty(data.result.length === 0);
    };

    fetchData();
  }, [location.search]);

  return { posts, pagination, isEmpty };
};
