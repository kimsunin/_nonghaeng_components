"use client";
import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { tripHref } from "@/storage/href";
import { useSearchParams } from "next/navigation";

export default function Travel() {
  const searchParams = useSearchParams();
  const region = searchParams.get("region");
  const search_word = searchParams.get("search_word");
  return (
    <>
      <nav id="nav">
        <Navigation hrefProps={tripHref} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>농촌관광 컴포넌트</h1>
          <h2>
            검색어 regioin:{region} search_word:{search_word}
          </h2>
        </div>
      </main>
    </>
  );
}
