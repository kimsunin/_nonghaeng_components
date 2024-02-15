import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { isLoginHref } from "@/storage/href";

export default function Mypage() {
  return (
    <>
      <nav id="nav">
        <Navigation hrefProps={isLoginHref} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>나의예약 컴포넌트</h1>
        </div>
      </main>
    </>
  );
}
