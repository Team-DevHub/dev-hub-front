import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const page = params.get('page');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, page]);

  return <>{children}</>;
}
