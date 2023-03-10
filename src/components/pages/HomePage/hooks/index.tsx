import { useCallback } from 'react';
import { useRouter } from 'next/router';

export const useTopPage = () => {
  const router = useRouter();

  const handleToBlogPage = useCallback(
    (id: string) => router.push(`/b/${id}`),
    [router]
  );

  const store = {
    handleToBlogPage
  };

  return store;
};
