"use client";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { tripHref } from "@/storage/href";
import { useSearchParams } from "next/navigation";

export default function Travel() {
  const searchParams = useSearchParams();
  const region = searchParams.get("region");
  const search_word = searchParams.get("search_word");
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <nav id="nav">
        <Navigation hrefProps={tripHref} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>농촌숙박 컴포넌트</h1>
          <h2>
            검색어 regioin:{region} search_word:{search_word}
          </h2>
        </div>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
