"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { headerHref } from "@/storage/href";
import Image from "next/image";
import home from "../storage/img/home.png";
import search from "../storage/img/search.png";
import menu from "../storage/img/menu.png";

export default function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const [isHover, setIsHover] = useState(false);
  function mouseOver() {
    setIsHover(true);
  }
  function mouseLeave() {
    setIsHover(false);
  }

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
    <div className="header_inner h-full flex justify-between">
      <div className="header_logo p-6">
        <Link href="/">
          <Image src={home} alt={"homeImage"} className="h-8 w-32" />
        </Link>
      </div>
      <nav
        className="header_menu"
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        <ul className="mainMenu flex">{mainMenuLinks}</ul>
      </nav>
      <div className="header_search border-slate-500 border shadow-md rounded-full w-64 m-5">
        <form className="h-full p-1" onSubmit={handleSearch}>
          <input
            className="border-black rounded-full w-52 h-full"
            placeholder="  알고 싶은 정보를 검색해보세요"
            onChange={onChange}
          ></input>
          <button className="absolute px-2 py-1" type="submit">
            <Image src={search} alt="search" className="h-full w-5" />
          </button>
        </form>
      </div>
      <div className="header_menu2 flex p-8 text-xs font-light">
        {isLogin ? (
          <button
            className="px-3 hover:text-[#FF7A00]"
            onClick={() => setIsLogin(false)}
          >
            로그아웃
          </button>
        ) : (
          <Link
            href="/pages/mypage/unlogin/login"
            className="px-3 hover:text-[#FF7A00]"
          >
            로그인
          </Link>
        )}
        <Link
          href={isLogin ? "/pages/mypage" : "/pages/mypage/unlogin/login"}
          className="px-3 hover:text-[#FF7A00]"
        >
          마이페이지
        </Link>
        <Link href="/pages/sitemap" className="px-3">
          <Image src={menu} alt="menu" className="w-6 h-full" />
        </Link>
      </div>
      <div
        className={`menu_bg bg-[#FF7A00]/80 absolute top-20 w-full overflow-hidden transition-all duration-500 ${
          isHover ? "h-52" : "h-0"
        }`}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      ></div>
    </div>
  );
}
