"use client";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import search from "../../../storage/img/home/search.png";
import { useEffect, useState } from "react";
import Result from "./result";
import { searchResult } from "@/storage/name";
import { useRouter, useSearchParams } from "next/navigation";
import MainResul from "./mainResult";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search_word, setSearch_word] = useState(
    searchParams.get("search_word")
  );
  const onChange = (e) => {
    setSearch_word(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/pages/search?search_word=${search_word}`);
  };

  const [select, setSelect] = useState(-1);

  let num = 0;
  searchResult.map((item) => (num += item.contents.length));

  const categoryList = searchResult.map((item, index) => (
    <li
      className={`${
        (select == index && "bg-[#FF9C40]") || "bg-[#FF9C40]/5"
      } w-[100px] h-full text-center rounded-sm`}
      key={index}
      onClick={() => setSelect(index)}
    >
      <button className="w-full h-full" onClick={() => setSelect(index)}>
        <h1
          className={`${(select == index && "text-white") || "text-[#FF9C40]"}`}
        >
          {item.title}
        </h1>
        <div
          className={`${
            (select == index && "bg-white") || "bg-[#FF9C40]/10"
          } text-[#FF9C40] w-[40px] mx-auto rounded-full`}
        >
          {item.contents.length}
        </div>
      </button>
    </li>
  ));

  return (
    <main id="main">
      <section className="mt-20 w-full h-[250px]">
        <div className="bg-[#FFC83BCC]/80 w-full h-[250px]">
          <h1 className="text-center text-3xl pt-[28px] text-[#5A5550]">
            통합검색
          </h1>
          <div className="bg-white bg-opacity-50 h-[80px] w-3/6 my-[20px] mx-auto rounded-[5px]">
            <form
              className="p-[15px] justify-between flex"
              onSubmit={handleSearch}
            >
              <input
                className="w-5/6 h-[50px] rounded-[5px] px-[10px]"
                placeholder="검색어를 입력해보세요."
                onChange={onChange}
                value={search_word}
              ></input>
              <button
                className="bg-[#5A5550] w-20 h-[50px] rounded-[5px] py-[13px] px-[16px] flex"
                type="submit"
              >
                <h1 className="text-white">검색</h1>
                <Image
                  src={search}
                  alt="search"
                  priority={false}
                  className="w-5"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
      <section id="content" className="pt-[50px]">
        <ul className="w-full h-[100px] flex justify-between">
          <li
            className={`${
              (select == -1 && "bg-[#FF9C40]") || "bg-[#FF9C40]/5"
            } w-[100px] h-full text-center rounded-sm`}
            key={-1}
            onClick={() => setSelect(-1)}
          >
            <button
              className="w-full h-full z-10"
              onClick={() => setSelect(-1)}
            >
              <h1
                className={`${
                  (select == -1 && "text-white") || "text-[#FF9C40]"
                }`}
              >
                통합검색
              </h1>
              <div
                className={`${
                  (select == -1 && "bg-white") || "bg-[#FF9C40]/10"
                } text-[#FF9C40] w-[40px] mx-auto rounded-full`}
              >
                {num}
              </div>
            </button>
          </li>
          {categoryList}
        </ul>
        <p className="py-[50px] text-lg text-[#5A5550] flex">
          "{searchParams.get("search_word")}"에 대한 검색결과
          <div className="bg-[#93D900] text-white ml-[6px] h-full text-center w-[40px] rounded-full">
            {num}
          </div>
        </p>

        {(select == -1 && <MainResul result={searchResult} />) || (
          <Result result={searchResult[select]} />
        )}
      </section>
    </main>
  );
}
