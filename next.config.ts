import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['ja', 'en'], // 対応する言語
    defaultLocale: 'ja',   // デフォルト言語
    localeDetection: true, // 自動言語検出（必要に応じて false に）
  },
};

export default nextConfig;
