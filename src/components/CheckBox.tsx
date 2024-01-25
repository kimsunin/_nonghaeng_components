"use client";
import Image from "next/image";
import search from "../storage/img/home/search.png";
import { useState } from "react";
import { region, category } from "@/storage/name";
import click_true from "../storage/img/home/click_true.png";
import click_false from "../storage/img/home/click_false.png";
import Link from "next/link";

export default function CheckBox() {
  const [isClick, setIsClick] = useState({ region: false, category: false });
  const mouseClick = (name) => {
    if (name == "region") {
      if (isClick.region == false) {
        setIsClick({ ...isClick, [name]: true });
      } else setIsClick({ ...isClick, [name]: false });
    } else {
      if (isClick.category == false) {
        setIsClick({ ...isClick, [name]: true });
      } else setIsClick({ ...isClick, [name]: false });
    }
  };

  const [selectedItem, setSelectedItem] = useState({
    region: "지역 선택",
    category: "카테고리 선택",
    search_word: "",
  });

  const onChange = (e) => {
    setSelectedItem({ ...selectedItem, search_word: e.target.value });
  };

  console.log(selectedItem);
  const regionList = region.map((item, index) => (
    <li
      key={index}
      className="hover:bg-slate-200 py-3 pl-4"
      onClick={() => setSelectedItem({ ...selectedItem, region: item })}
    >
      {item}
    </li>
  ));

  const categoryList = category.map((item, index) => (
    <li
      key={index}
      className="hover:bg-slate-200 py-3 pl-4"
      onClick={() => setSelectedItem({ ...selectedItem, category: item })}
    >
      {item}
    </li>
  ));

  return (
    <div className="main_search absolute bg-[#FFC83B]/80 w-5/6 h-28 bottom-20 rounded-[3px]">
      <form className="mx-auto w-5/6 h-full flex items-center justify-between">
        <div
          className="select_region bg-white w-52 h-12 rounded-[5px] hover:cursor-pointer"
          onClick={() => mouseClick("region")}
        >
          <div
            className={`${
              isClick.region
                ? "bg-[#5A5550] text-white"
                : "bg-white text-[#5A5550]"
            } flex py-3 w-full h-full rounded-[5px] `}
          >
            <span className="pl-4 w-full">{selectedItem.region}</span>
            <Image
              src={isClick.region ? click_true : click_false}
              alt="select_img"
              className="my-2 mr-4 w-[20px] h-[10px]"
            />
          </div>
          <div
            className={`bg-white w-full h-60 rounded-[5px] border-2 border-[#5A5550] overflow-y-auto ${
              isClick.region ? "" : "hidden"
            }`}
          >
            <ul>{regionList}</ul>
          </div>
        </div>
        <div
          className="select_category bg-white w-52 h-12 rounded-[5px] hover:cursor-pointer"
          onClick={() => mouseClick("category")}
        >
          <div
            className={`${
              isClick.category
                ? "bg-[#5A5550] text-white"
                : "bg-white text-[#5A5550]"
            } flex py-3 w-full h-full rounded-[5px]`}
          >
            <span className="pl-4 w-full">{selectedItem.category}</span>
            <Image
              src={isClick.category ? click_true : click_false}
              alt="select_img"
              className="my-2 mr-4 w-[20px] h-[10px]"
            />
          </div>
          <div
            className={`bg-white w-full h-36 rounded-[5px] border-2 border-[#5A5550] overflow-y-auto ${
              isClick.category ? "" : "hidden"
            }`}
          >
            <ul>{categoryList}</ul>
          </div>
        </div>
        <div className="w-88 h-12 flex">
          <input
            className="w-60 h-full rounded-[5px]"
            placeholder="  검색어를 입력해보세요."
            name="search_word"
            onChange={onChange}
          ></input>
          {/* <Link
            href={`/pages/introduce?search_word=${selectedItem.search_word}`}
          > */}
          <button className="bg-[#5A5550] ml-4 w-20 h-full rounded-[5px] flex">
            <h1 className="text-white p-3">검색</h1>
            <Image src={search} alt="search" className="w-5 pt-3" />
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}
