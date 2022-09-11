import { useState, useCallback } from 'react';

export const useAside = () => {
  const [query, setQuery] = useState('');

  const handleChnageQuery = useCallback((query: string) => setQuery(query), []);

  const store = {
    query,
    handleChnageQuery
  };

  return store;
};
