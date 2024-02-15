"use client";
import { useState } from "react";
import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { unLoginHref } from "@/storage/href";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { emailAddress } from "@/storage/name";
axios.defaults.withCredentials = true;

export default function joinMember() {
  const router = useRouter();

  const [user, setUser] = useState({
    number: "",
    name: "",
    password: "",
    check_password: "",
    email: "",
  });
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/sign-up", user, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then(() => {
        // if(res.data == "회원가입 성공")
        alert("회원가입 성공.");
        router.push("/pages/mypage/unlogin/login");
      });
  };

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
          <form className="py-[20px]" onChange={onChange} onSubmit={onSubmit}>
            <div className="flex h-[40px] my-[15px]">
              <span className="w-1/4 font-medium text-[18px] py-[5px]">
                휴대전화(ID)
              </span>
              <input
                className="bg-slate-100 w-3/4 pl-[10px] rounded-md"
                placeholder="휴대전화 입력(숫자만 입력)"
                type="tel"
                name="number"
              ></input>
            </div>
            <div className="flex h-[40px] my-[15px]">
              <span className="w-1/4 font-medium text-[18px] py-[5px]">
                이름
              </span>
              <input
                className="bg-slate-100 w-3/4 pl-[10px] rounded-md"
                placeholder="이름 입력"
                type="text"
                name="name"
              ></input>
            </div>
            <div className="flex h-[40px] my-[15px]">
              <span className="w-1/4 font-medium text-[18px] py-[5px]">
                비밀번호
              </span>
              <input
                className="bg-slate-100 w-3/4 pl-[10px] rounded-md"
                placeholder="영문, 숫자, 특수문자를 각 1개 이상 조합 8~16자 입력"
                type="text"
                name="password"
              ></input>
            </div>
            <div className="flex h-[40px] my-[15px]">
              <span className="w-1/4 font-medium text-[18px] py-[5px]">
                비밀번호확인
              </span>
              <input
                className="bg-slate-100 w-3/4 pl-[10px] rounded-md"
                placeholder="비밀번호 재입력"
                type="password"
                name="check_password"
              ></input>
            </div>
            <div className="flex h-[40px] my-[15px]">
              <span className="w-1/4 font-medium text-[18px] py-[5px]">
                이메일
              </span>
              {/* <input
                className="bg-slate-100 w-1/4 pl-[10px] rounded-md"
                placeholder="이메일 아이디 입력"
                name="email_id"
              ></input>
              <span className="text-[18px] p-[5px]">@</span>
              <input
                className="bg-slate-100 w-1/4 pl-[10px] rounded-md"
                placeholder="이메일 주소 입력"
                name="email_address"
              ></input> */}
              <input
                className="bg-slate-100 w-3/4 pl-[10px] rounded-md"
                placeholder="이메일 입력"
                type="email"
                name="email"
              ></input>
              {/* <div className="border rounded-md  w-[150px] ml-[5px]"></div> */}
            </div>
            <hr className="border-[#5A5550] mt-[35px] border-[1px]"></hr>
            <div className="text-center py-[50px]">
              <button className="bg-slate-100 w-[150px] h-[50px] font-medium text-[18px] rounded-md mr-[5px]">
                <Link href="/pages/mypage/unlogin/login">취소</Link>
              </button>
              <button
                className="bg-[#5A5550] text-white w-[150px] h-[50px] font-medium text-[18px] rounded-md "
                type="submit"
              >
                확인
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
