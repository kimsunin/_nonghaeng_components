"use client";
import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { isLoginHref } from "@/storage/href";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Mypage() {
  const [user, setUser] = useState();

  // useEffect(() => axios.get(""));

  return (
    <>
      <nav id="nav">
        <Navigation hrefProps={isLoginHref} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>마이페이지 컴포넌트</h1>
        </div>
      </main>
    </>
  );
}
