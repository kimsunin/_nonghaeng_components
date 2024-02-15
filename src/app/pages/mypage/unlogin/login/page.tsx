"use client";
import { useState } from "react";
import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { unLoginHref } from "@/storage/href";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function Mypage() {
  const router = useRouter();

  const [user, setUser] = useState({ number: "", password: "" });
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (user.number == "") alert("휴대전화를 입력해주세요.");
    else if (user.password == "") alert("비밀번호를 입력해주세요.");
    else {
      axios
        .post("http://localhost:8080/login", user, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((res) => {
          // if(res.data == "로그인 성공")
          let token = res.headers.authorization;
          localStorage.setItem("accessToken", `Bearer ${token}`);
          // 리덕스에 토큰과 관련된 로그인상태 업데이트, 시간정보 저장
          alert("로그인 성공.");
          router.push("/");
          // router.push("/");
        });
    }
  };
  const test = () => {
    const jwtToken = `Bearer ${localStorage.getItem("jwtToken")}`;
    axios
      .get("http://192.168.0.17:8080/jwt-test", {
        headers: { Authorization: jwtToken, withCredentials: true },
      })
      .then((res) => console.log(res.data));
  };
  return (
    <>
      <nav id="nav">
        <Navigation hrefProps={unLoginHref} />
      </nav>
      <main id="content">
        <div id="content">
          <h1 className="text-[#5A5550] text-center my-[50px] text-[30px] font-bold">
            로그인
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
                비밀번호
              </span>
              <input
                className="bg-slate-100 w-3/4 pl-[10px] rounded-md"
                placeholder="비밀번호 입력"
                type="password"
                name="password"
              ></input>
            </div>
            <hr className="border-[#5A5550] mt-[35px] border-[1px]"></hr>
            <div className="text-center py-[50px]">
              <button
                className="bg-[#5A5550] text-white w-[150px] h-[50px] font-medium text-[18px] rounded-md"
                type="submit"
              >
                로그인
              </button>
              <div className="mt-[20px] text-[#5A5550]/80 font-medium">
                <Link href="/pages/mypage/unlogin/join">회원가입</Link>
                <label className="border-[#5A5550]/70 mx-[5px] border-l-[2px]"></label>
                <Link href="/pages/mypage/unlogin/findpass">비밀번호찾기</Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
