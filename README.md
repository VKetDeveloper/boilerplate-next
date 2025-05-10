This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Information

> [!NOTE]
>[Vket Boilerplate Nuxt](https://github.com/PublicHIKKY/vket-boilerplate-nuxt)をベースとしたNext.js + Zustand + Three.jsのVket Boilerplateです。


> [!WARNING]
> 現在開発中のため、バグなどあれば、[プロジェクトに貢献する](https://docs.github.com/ja/get-started/exploring-projects-on-github/contributing-to-a-project)を確認してご協力ください。

## インストール済みライブラリ
### dependencies

| ライブラリ名               | バージョン      | 説明                                             |
| -------------------- | ---------- | ---------------------------------------------- |
| `@pixiv/three-vrm`  | `3.4.0`  | React ThreeでVRMを表示、読み込みなどを行うPixiv製のライブラリ。              |   
| `@pixiv/@charcoal-ui`  | `4.5.0`  | これはpixivによる@charcoal-uiパッケージのmonorepoです。      |
| `@react-three/drei`  | `^10.0.7`  | React Three Fiber 用の便利なコンポーネント集。               |
| `@react-three/fiber` | `^9.1.2`   | React と Three.js を連携させるためのライブラリ。               |
| `@react-three/xr`    | `^6.6.16`  | XR（拡張現実）コンテンツの構築をサポートするライブラリ。                  |
| `next`               | `15.3.2`   | Next.js 本体。サーバーサイドレンダリングをサポートする React フレームワーク。 |
| `react`              | `^19.0.0`  | React 本体。UI コンポーネントを構築するためのライブラリ。              |
| `react-dom`          | `^19.0.0`  | React 用の DOM 操作ライブラリ。                          |
| `three`              | `^0.176.0` | 3D グラフィックスのための JavaScript ライブラリ。               |
| `zustand`            | `^5.0.4`   | 軽量な状態管理ライブラリ。                                  |


### devDependencies
| ライブラリ名                 | バージョン     | 説明                                    |
| ---------------------- | --------- | ------------------------------------- |
| `@eslint/eslintrc`     | `^3`      | ESLint の設定ファイルの基盤を提供するパッケージ。          |
| `@eslint/js`           | `^9.26.0` | ESLint の JavaScript 解析用プラグイン。         |
| `@tailwindcss/postcss` | `^4`      | Tailwind CSS を PostCSS と統合するためのプラグイン。 |
| `@types/node`          | `^20`     | Node.js の型定義。                         |
| `@types/react`         | `^19`     | React の型定義。                           |
| `@types/react-dom`     | `^19`     | React DOM の型定義。                       |
| `eslint`               | `^9.26.0` | コードの静的解析ツールである ESLint 本体。             |
| `eslint-config-next`   | `15.3.2`  | Next.js 用の ESLint 設定パッケージ。            |
| `eslint-plugin-react`  | `^7.37.5` | React 専用の ESLint プラグイン。               |
| `globals`              | `^16.1.0` | グローバル変数に関する設定を提供するパッケージ。              |
| `husky`                | `^9.1.7`  | Git フックを設定するためのツール。                   |
| `lint-staged`          | `^15.5.2` | Git のコミット前にファイルのリント（コード整形）を実行するツール。   |
| `tailwindcss`          | `^4`      | ユーティリティファースト CSS フレームワーク。             |
| `typescript`           | `^5`      | TypeScript 本体。                        |
| `typescript-eslint`    | `^8.32.0` | TypeScript 用の ESLint プラグイン。           |


### Setup
```bash
npm install
```


## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
