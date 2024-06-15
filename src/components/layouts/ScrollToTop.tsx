import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const page = params.get('page');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return <>{children}</>;
}
