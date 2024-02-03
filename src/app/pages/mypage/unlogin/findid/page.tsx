import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { unLoginHref } from "@/storage/href";

export default function Mypage() {
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
          <h1>아이디찾기 컴포넌트</h1>
        </div>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
