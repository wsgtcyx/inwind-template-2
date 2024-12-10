import { Post } from "@/types/post";
import fs from "fs";
import path from "path";
const matter = require("gray-matter");
import { PostPreview } from "@/types/post";

// 新增一个轻量级的类型定义

// 为首页优化的获取文章预览信息函数
export async function getPostPreviews(lang: string): Promise<PostPreview[]> {
  const contentDirectory = path.join(process.cwd(), "locales", "post");
  const slugDirs = await fs.promises.readdir(contentDirectory);
  
  const postPreviews = await Promise.all(
    slugDirs.map(async (slug) => {
      const langPath = path.join(contentDirectory, slug, `${lang}.mdx`);
      
      try {
        // 只读取文件的开头部分（通常足够获取 frontmatter）
        const fileBuffer = await fs.promises.readFile(langPath, "utf8");
        const { data: metadata } = matter(fileBuffer);
        
        return {
          slug,
          metadata: {
            ...metadata,
            slug, // 确保 slug 也包含在 metadata 中
          }
        };
      } catch (error) {
        // 如果该语言版本不存在，返回 null
        return null;
      }
    })
  );

  // 过滤掉不存在的语言版本
  return postPreviews
    .filter((post): post is PostPreview => post !== null)
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
}

// 保留原有的完整文章获取函数，用于文章详情页
export async function getPosts(lang: string): Promise<{ posts: Post[] }> {
  const contentDirectory = path.join(process.cwd(), "locales", "post");
  
  // 1. 获取所有文章目录
  const slugDirs = await fs.promises.readdir(contentDirectory);
  
  const posts = await Promise.all(
    slugDirs.map(async (slug) => {
      // 2. 构建特定语言版本的文件路径
      const fullPath = path.join(contentDirectory, slug, `${lang}.mdx`);
      
      // 3. 检查该语言版本是否存在
      try {
        const fileContents = await fs.promises.readFile(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        
        return {
          fullPath,
          metadata: {
            ...data,
            slug, // 添加 slug 到 metadata
          },
          content,
        };
      } catch (error) {
        // 如果该语言版本不存在，返回 null
        return null;
      }
    })
  );

  // 4. 过滤掉不存在的语言版本
  const validPosts = posts.filter((post) => post !== null);
  
  return { posts: validPosts };
}