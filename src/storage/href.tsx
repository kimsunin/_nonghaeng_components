// header href
export const headerHref = [
  {
    title: "농행동행",
    href: "/pages/introduce",
    subMenu: [
      { title: "농행동행 소개", href: "/pages/introduce/nongdong" },
      { title: "농촌관광 소개", href: "/pages/introduce/tour" },
    ],
  },
  {
    title: "농촌여행",
    href: "/pages/trip",
    subMenu: [
      { title: "농촌관광", href: "/pages/trip/tour" },
      { title: "농촌체험", href: "/pages/trip/experience" },
      { title: "농촌숙박", href: "/pages/trip/lodgment" },
      { title: "농촌힐링", href: "/pages/trip/healing" },
    ],
  },
  {
    title: "기획상품",
    href: "/pages/item",
    subMenu: [],
  },
  {
    title: "커뮤니티",
    href: "/pages/community",
    subMenu: [
      { title: "공지사항", href: "/pages/community/notification" },
      { title: "노행후기", href: "/pages/community/review" },
      { title: "고객문의", href: "/pages/community/inquiry" },
    ],
  },
];

//navigation href
export const introduceHref = {
  mainMenu: { href: "/pages/introduce", title: "농행동행" },
  subMenu: [
    { href: "/pages/introduce/nongdong", title: "농행동행 소개" },
    { href: "/pages/introduce/tour", title: "농촌관광 소개" },
  ],
};

export const tripHref = {
  mainMenu: { href: "/pages/trip", title: "농촌여행" },
  subMenu: [
    { href: "/pages/trip/tour", title: "농촌관광" },
    { href: "/pages/trip/experience", title: "농촌체험" },
    { href: "/pages/trip/lodgment", title: "농촌숙박" },
    { href: "/pages/trip/healing", title: "농촌힐링" },
  ],
};

export const itemHref = {
  mainMenu: { href: "/pages/item", title: "기획상품" },
  subMenu: [],
};

export const communityHref = {
  mainMenu: { href: "/pages/community", title: "커뮤니티" },
  subMenu: [
    { href: "/pages/community/notification", title: "공지사항" },
    { href: "/pages/community/review", title: "노행후기" },
    { href: "/pages/community/inquiry", title: "고객문의" },
  ],
};

export const sitemapHref = {
  mainMenu: { href: "/pages/sitemap", title: "사이트맵" },
  subMenu: [{ href: "/pages/sitemap", title: "사이트맵" }],
};

export const isLoginHref = {
  mainMenu: { href: "/pages/mypage", title: "마이페이지" },
  subMenu: [
    { href: "/pages/mypage/reservation", title: "나의예약" },
    { href: "/pages/mypage/writing", title: "나의 작성글" },
    { href: "/pages/mypage/coupon", title: "나의 쿠폰" },
    { href: "/pages/mypage/item", title: "관심상품" },
    { href: "/pages/mypage/edit", title: "회원정보수정" },
  ],
};

export const unLoginHref = {
  mainMenu: { href: "/pages/mypage/unlogin/login", title: "마이페이지" },
  subMenu: [
    { href: "/pages/mypage/unlogin/login", title: "로그인" },
    { href: "/pages/mypage/unlogin/join", title: "회원가입" },
    { href: "/pages/mypage/unlogin/findid", title: "아이디칮기" },
    { href: "/pages/mypage/unlogin/findpass", title: "비밀번호찾기" },
  ],
};

// footer href
export const footerHref = [
  { href: "/", title: "소개" },
  { href: "/", title: "이벤트" },
  { href: "/", title: "이용약관" },
  { href: "/", title: "개인정보처리방침" },
  { href: "/", title: "이메일수집거부" },
  { href: "/", title: "고객문의" },
];
