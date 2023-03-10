import { useCallback } from 'react';
import { useRouter } from 'next/router';

export const useBPage = () => {
  const router = useRouter();

  const handlePageChange = useCallback(
    (page: number) => router.push(`/b/page/${page}`),
    [router]
  );

  const handleToBlogPage = useCallback(
    (id: string) => router.push(`/b/${id}`),
    [router]
  );

  const store = {
    handlePageChange,
    handleToBlogPage
  };

  return store;
};
