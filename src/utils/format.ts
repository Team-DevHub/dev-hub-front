export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const padZero = (num: number): string => num.toString().padStart(2, '0');

  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());

  return `${year}.${month}.${day}`;
};
