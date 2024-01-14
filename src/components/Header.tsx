"use client";
import Link from "next/link";
import { useState } from "react";
import { headerHref } from "@/storage/href";

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
      className={`subMenu absolute w-full text-center t-20 z-10 overflow-hidden transition-all duration-500 ${
        isHover ? "h-52" : "h-0"
      }`}
    >
      {subMenu.map((subItem, subIndex) => (
        <li key={subIndex} className="pt-5">
          <Link href={subItem.href}>{subItem.title}</Link>
        </li>
      ))}
    </ul>
  );

  const mainMenuLinks = headerHref.map((mainItem, index) => (
    <li key={index} className="relative">
      <Link
        href={mainItem.href}
        className="hover:text-slate-400 inline-block p-7"
      >
        {mainItem.title}
      </Link>
      {mainItem.subMenu && subMenuLinks(mainItem.subMenu)}
    </li>
  ));

  return (
    <div className="header_inner h-full flex justify-between">
      <div className="header_logo p-7">
        <Link href="/">home</Link>
      </div>
      <nav
        className="header_menu"
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        <ul className="mainMenu flex">{mainMenuLinks}</ul>
      </nav>
      <div className="header_search p-7">header search</div>
      <div className="header_menu2 p-7">
        {isLogin && <Link href="/pages/mypage/login">로그인</Link>}
        <Link href="/pages/mypage">마이페이지</Link>
        <Link href="/pages/sitemap">메뉴</Link>
      </div>
      <div
        className={`menu_bg bg-slate-400 absolute top-20 w-full opacity-80 overflow-hidden transition-all duration-500 ${
          isHover ? "h-52" : "h-0"
        }`}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      ></div>
    </div>
  );
}
