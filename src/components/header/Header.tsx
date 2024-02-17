"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { headerHref } from "@/storage/href";
import Image from "next/image";
import home from "../../storage/img/home.png";
import search from "../../storage/img/search.png";
import menu from "../../storage/img/menu.png";
import axios from "axios";

export default function Header(token) {
  const router = useRouter();

  // 로그인 상태
  // const [accessToken, setAccessToken] = useState(
  //   localStorage.getItem("accessToken")
  // );
  const [accessToken, setAccessToken] = useState(token);
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken(null);
  };

  // 로그인 토큰 유효성 검사
  // useEffect(() => {
  // 서버에 토큰과 함께 get요청 -> 토큰이 유효하다는 답장을 받으면 아무것도 하지 않음,
  // 토큰이 유효하지 않다는 답장을 받으면 localstorage에 저장되어 있던 refreshToken을 서버에 전달
  // 서버로부터 새로운 토큰을 전달받으면 localstorage에 저장
  // >>로그인 유지성공
  // });

  // 메뉴 호버
  const [isHover, setIsHover] = useState(false);
  function mouseOver() {
    setIsHover(true);
  }
  function mouseLeave() {
    setIsHover(false);
  }

  // 검색
  const [search_word, setSearch_word] = useState("");
  const onChange = (e) => {
    setSearch_word(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (search_word == "") {
      alert("검색어를 입력해주세요");
    } else router.push(`/pages/search?search_word=${search_word}`);
  };

  // 메뉴 리스트
  const subMenuLinks = (subMenu) => (
    <ul
      className={`subMenu absolute w-full text-center top-24 z-10 overflow-hidden transition-all duration-500 ${
        isHover ? "h-52" : "h-0"
      }`}
    >
      {subMenu.map((item, index) => (
        <li key={index} className="pt-4 text-white">
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
  const mainMenuLinks = headerHref.map((mainItem, index) => (
    <li key={index} className="relative">
      <Link
        href={mainItem.href}
        className="hover:text-[#FF7A00] inline-block py-7 px-5"
      >
        {mainItem.title}
      </Link>
      {mainItem.subMenu && subMenuLinks(mainItem.subMenu)}
    </li>
  ));

  return (
    <header id="header">
      <div className={styles.header_inner}>
        <Link href="/" className="header_logo p-6">
          <Image
            src={home}
            alt="homeImage"
            priority={false}
            className="h-8 w-32"
          />
        </Link>
        <nav
          className="header_menu"
          onMouseOver={mouseOver}
          onMouseLeave={mouseLeave}
        >
          <ul className="mainMenu w-[400px] flex">{mainMenuLinks}</ul>
        </nav>
        <form
          className=" border-slate-500 border shadow-md rounded-full w-64 m-5 p-1 flex"
          onSubmit={handleSearch}
        >
          <input
            className="border-black rounded-full w-52 h-full px-[15px]"
            placeholder="알고 싶은 정보가 있으세요?"
            onChange={onChange}
          ></input>
          <button className="px-[4px]" type="submit">
            <Image
              src={search}
              alt="search"
              priority={false}
              className="h-5 w-5"
            />
          </button>
        </form>
        <div className="header_menu2 flex pr-8 w-[200px] justify-between text-xs font-light">
          {accessToken ? (
            <button className=" hover:text-[#FF7A00] my-8" onClick={logout}>
              로그아웃
            </button>
          ) : (
            <Link
              href="/pages/mypage/unlogin/login"
              className=" hover:text-[#FF7A00] my-8"
            >
              로그인
            </Link>
          )}
          <Link
            href={accessToken ? "/pages/mypage" : "/pages/mypage/unlogin/login"}
            className="hover:text-[#FF7A00] my-8"
          >
            마이페이지
          </Link>
          <Link
            href="/pages/sitemap"
            className="hover:bg-[#FF7A00]/20 w-[40px] h-[40px] p-[12px] my-5 rounded-full"
          >
            <Image
              src={menu}
              alt="menu"
              priority={false}
              className="w-6 h-full"
            />
          </Link>
        </div>
        <div
          className={`menu_bg bg-[#FF7A00]/80 absolute top-20 w-full overflow-hidden transition-all duration-500 ${
            isHover ? "h-[210px]" : "h-0"
          }`}
          onMouseOver={mouseOver}
          onMouseLeave={mouseLeave}
        ></div>
      </div>
    </header>
  );
}

// 서버사이드 렌더링이 아닌 정적생성
export function getStaticProps() {
  const token = localStorage.getItem("accessToken");
  return { props: { token } };
}

// 서버사이드 렌더링 = getServerSideProps()
