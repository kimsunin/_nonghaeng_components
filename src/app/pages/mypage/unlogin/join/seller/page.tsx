"use client";
import { useState } from "react";
import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { unLoginHref } from "@/storage/href";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function joinSeller() {
  return (
    <>
      <nav id="nav">
        <Navigation hrefProps={unLoginHref} />
      </nav>
      <main id="content">
        <div id="content">
          <h1 className="text-[#5A5550] text-center my-[50px] text-[30px] font-bold">
            회원가입
          </h1>
          <hr className="border-[#5A5550] border-[2px]"></hr>
          <form className="py-[20px]">
            <div className="flex h-[40px] my-[15px]">
              <span className="w-1/4 font-medium text-[18px] py-[5px]">
                휴대전화(ID)
              </span>
              <input
                className="bg-slate-100 w-3/4 pl-[10px] rounded-md"
                placeholder="휴대전화 입력(숫자만 입력)"
                type="tel"
                name="phone_number"
              />
            </div>
            <div className="flex h-[40px] my-[15px]">
              <span className="w-1/4 font-medium text-[18px] py-[5px]">
                사업자 번호
              </span>
              <input
                className="bg-slate-100 w-3/4 pl-[10px] rounded-md"
                placeholder="사업자 번호 입력"
                type="text"
                name="business_number"
              ></input>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
