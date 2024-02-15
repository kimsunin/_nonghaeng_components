This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

accessToken관리
로그인 완료후 토근을 수령하게 되면 localstorage에 저장하는 동시에 redux에도 유저정보와 함께 저장 이때 만료시간도 함께 저장. 토근이 시간이 지나 만료되면 모든 페이지에서 공유하는 header컴포넌트를 통해 토근과 유저정보 삭제 -> 로그인 상태 false로 저장

Header
useEffect를 통한 user토큰 get요청 및 유효성 확인을 위한 get요청 -> 유효한 토큰일 경우 login상태를 true로 유효한 토근이 아닐경우 user토큰 삭제하는 동시에 login상태를 false로 변경.
