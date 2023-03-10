import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLazyQuery } from '@apollo/client';
import * as cheerio from 'cheerio';
import {
  NormalBlogDocument,
  NightBlogDocument,
  Blog
} from '@generated/graphql';
import { useGetWindowSize } from 'src/common/hooks/useGetWindowSize';
import { useBlogMode } from 'src/common/hooks/useBlogMode';

const createToc = (body: string) => {
  const $ = cheerio.load(body);
  const headings = $('h1, h2, h3').toArray();
  const toc = headings.map((data) => ({
    text: $(data.children[0]).text(),
    id: data.attribs.id,
    name: data.name
  }));

  return toc;
};

export const useBlogPage = () => {
  const router = useRouter();
  const [toc, setToc] = useState<
    Array<{
      id: string;
      text: string;
      name: string;
    }>
  >([]);
  const [
    getBlog,
    { loading: normalLoading, error: normalError, data: normalData }
  ] = useLazyQuery<{
    blog: Blog;
  }>(NormalBlogDocument);
  const [
    getNightBlog,
    { loading: nightLoading, error: nightError, data: nightData }
  ] = useLazyQuery<{
    blog: Blog;
  }>(NightBlogDocument);
  const { windowSize } = useGetWindowSize();
  const { blogMode } = useBlogMode({ windowSize });

  useEffect(() => {
    if (!router.isReady) return;

    const id = Number(router.query.blogId);
    if (blogMode === 'normal') getBlog({ variables: { id } });
    else if (blogMode === 'night') getNightBlog({ variables: { id } });

    const body =
      blogMode === 'normal' ? normalData?.blog.body : nightData?.blog.nightBody;
    if (body) {
      const toc = createToc(body);
      setToc(toc);
    }
  }, [
    router.isReady,
    router.query.blogId,
    blogMode,
    getBlog,
    getNightBlog,
    normalData,
    nightData
  ]);

  return {
    blog: blogMode === 'normal' ? normalData?.blog : nightData?.blog,
    toc,
    loading: normalLoading || nightLoading,
    error: normalError || nightError
  };
};
