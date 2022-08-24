import { TagType } from './Tag';

// ブログ データ型
export interface BlogType {
  id: string;
  title: string;
  description: string;
  body: string;
  imagePath: string;
  tags: Array<TagType>;
  createdAt: string;
  updatedAt: string;
}
