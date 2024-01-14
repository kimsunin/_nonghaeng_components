import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { communityHref } from "@/storage/href";

export default function community() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <hr />
      <nav id="nav">
        <Navigation hrefProps={communityHref} />
      </nav>
      <hr />
      <main id="main">
        <div id="content">
          <h1>커뮤니티 컴포넌트</h1>
        </div>
      </main>
      <hr />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
