import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { introduceHref } from "@/storage/href";

export default function IntroduceChild3() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>

      <nav id="nav">
        <Navigation hrefProps={introduceHref} />
      </nav>

      <main id="main">
        <div id="content">
          <h1>소개 자식3 컴포넌트</h1>
        </div>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
