import { useEffect, useState, useCallback } from 'react';

type Props = {
  windowSize: {
    width: number;
    height: number;
  };
};

export const useBlogMode = (props: Props) => {
  const { windowSize } = props;

  const [blogMode, setBlogMode] = useState<'normal' | 'night' | 'mobile'>(
    'normal'
  );

  const handleSetBlogMode = useCallback(
    (mode: 'normal' | 'night' | 'mobile') => setBlogMode(mode),
    []
  );

  useEffect(() => {
    const hours = new Date().getHours();

    if (windowSize.width < 480) handleSetBlogMode('mobile');
    else if (5 > hours || hours > 19) handleSetBlogMode('night');
    else handleSetBlogMode('normal');
  }, [windowSize, handleSetBlogMode]);

  return { blogMode };
};
