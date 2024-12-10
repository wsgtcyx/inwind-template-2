// 通用接口定义
interface NavLink {
  name: string;
  url: string;
}

interface LocaleText {
  logoText: string;
  aboutText: string;
  quickLinksTitle: string;
  downloadTitle: string;
  connectTitle: string;
  copyrightText: string;
}

interface SocialLink {
  name: string;
  url: string;
}

interface DownloadLink {
  name: string;
  url: string;
}

// 将这些类型导出
export type {
  NavLink,
  LocaleText,
  SocialLink,
  DownloadLink
} 