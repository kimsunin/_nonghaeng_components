"use client";
import Link from "next/link";
import { useState } from "react";
import { headerHref } from "@/storage/href";
import Image from "next/image";
import home from "../storage/img/home.png";
import search from "../storage/img/search.png";
import menu from "../storage/img/menu.png";

export default function Header() {
  const isLogin = true;

  const [isHover, setIsHover] = useState(false);

  function mouseOver() {
    setIsHover(true);
    console.log("mouseOver");
  }

  function mouseLeave() {
    setIsHover(false);
    console.log("mouseLeave");
  }

  const subMenuLinks = (subMenu) => (
    <ul
      className={`subMenu absolute w-full text-center top-24 z-10 overflow-hidden transition-all duration-500 ${
        isHover ? "h-52" : "h-0"
      }`}
    >
      {subMenu.map((subItem, subIndex) => (
        <li key={subIndex} className="pt-4 text-white">
          <Link href={subItem.href}>{subItem.title}</Link>
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
      <div className="header_search border-slate-500 border rounded-full w-64 m-5">
        <form className="h-full p-1">
          <input
            className="border-black rounded-full w-52 h-full"
            placeholder="  알고 싶은 정보를 검색해보세요"
          ></input>
          <button className="absolute px-2 py-1">
            <Image src={search} alt="search" className="h-full w-5" />
          </button>
        </form>
      </div>
      <div className="header_menu2 flex p-8 text-xs font-light">
        {isLogin && (
          <Link href="pages/mypage/login" className="px-3 hover:text-[#FF7A00]">
            로그인
          </Link>
        )}
        <Link href="/pages/mypage" className="px-3 hover:text-[#FF7A00]">
          마이페이지
        </Link>
        <Link href="/sitemap" className="px-3">
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
