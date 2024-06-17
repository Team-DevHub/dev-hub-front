import { useState, useEffect } from 'react';
import { postAPI } from '@/api/requests/postAPI';
import usePostStore from '@/store/postStore';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setSelectedPost } = usePostStore();

  const handleClick = async (postId: number) => {
    const postRes = await postAPI.post(postId);
    setSelectedPost(postRes.result);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  // 팝업 등장 시 뒷배경 스크롤 방지
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return {
    isModalOpen,
    handleClick,
    closeModal,
  };
};
