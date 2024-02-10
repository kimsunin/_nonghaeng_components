"use client";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { unLoginHref } from "@/storage/href";
import { useRouter } from "next/navigation";

export default function Mypage() {
  const router = useRouter();
  const login = () => {
    localStorage.setItem("LoginUser", JSON.stringify({ isLogin: true }));
    alert("login");
    router.replace("/");
  };
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <nav id="nav">
        <Navigation hrefProps={unLoginHref} />
      </nav>
      <main id="main">
        <div id="content">
          <button className="bg-slate-500" onClick={login}>
            로그인
          </button>
        </div>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
