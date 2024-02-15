import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { unLoginHref } from "@/storage/href";

export default function Mypage() {
  return (
    <>
      <nav id="nav">
        <Navigation hrefProps={unLoginHref} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>비밀번호찾기 컴포넌트</h1>
        </div>
      </main>
    </>
  );
}
