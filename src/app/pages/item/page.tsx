import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { itemHref } from "@/storage/href";

export default function Plan() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <nav id="nav">
        <Navigation hrefProps={itemHref} />
      </nav>
      <main id="main">
        <div id="content">
          <p className="bg-[#FF9C40] w-[200px] h-[40px] p-[8px] mx-auto mt-[100px] rounded-full text-center">
            기획중입니다...
          </p>
        </div>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
