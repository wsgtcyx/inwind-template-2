export type Post = {
    slug?: string;
    title?: string;
    content: string;
    metadata: {
      [key: string]: any;
    };
  };
  
  export type PostPreview = {
    slug: string;
    metadata: {
      title: string;
      image: string;
      date: string;
      description: string;
      // 其他 metadata 字段...
    }
  }