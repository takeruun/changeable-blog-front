import { useCallback } from 'react';
import { useRouter } from 'next/router';

export const useBPageState = () => {
  const router = useRouter();

  const handlePageChange = useCallback(
    (page: number) => router.push(`/b/page/${page}`),
    [router]
  );

  const store = {
    handlePageChange
  };

  return store;
};
