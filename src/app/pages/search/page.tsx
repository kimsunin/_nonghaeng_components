"use client";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import search from "../../../storage/img/home/search.png";
import { useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const [search_word, setSearch_word] = useState(
    searchParams.get("search_word")
  );
  const onChange = (e) => {
    setSearch_word(e.target.value);
  };
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <main id="main">
        <section className="mt-20 w-full h-[250px]">
          <div className="bg-[#FFC83BCC]/80 w-full h-[250px]">
            <h1 className="text-center text-3xl pt-[28px] text-[#5A5550]">
              통합검색
            </h1>
            <div className="bg-white bg-opacity-50 h-[80px] w-3/6 my-[20px] mx-auto rounded-[5px]">
              <form className="p-[15px] justify-between flex">
                <input
                  className="w-5/6 h-[50px] rounded-[5px]"
                  onChange={onChange}
                  value={search_word}
                ></input>
                <button className="bg-[#5A5550] w-20 h-[50px] rounded-[5px] py-[13px] px-[16px] flex">
                  <h1 className="text-white">검색</h1>
                  <Image src={search} alt="search" className="w-5" />
                </button>
              </form>
            </div>
          </div>
        </section>
        <div id="content">
          <h2>search_word:{search_word}</h2>
        </div>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
