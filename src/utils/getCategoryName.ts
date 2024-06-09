import { categories } from '@/data/categories';

export const getCategoryName = (categoryId: number): string => {
  const category = categories.find((item) => item.id === categoryId);
  return category ? category.name : '';
};
