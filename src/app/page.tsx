import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <main id="main">
        <div className="mt-20">
          <h1>홈입니다</h1>
        </div>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
