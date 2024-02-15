import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { unLoginHref } from "@/storage/href";

export default function join() {
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
          <div className="flex justify-between">
            <div className="w-[350px]">
              <hr className="border-[#5A5550] border-[2px]"></hr>
              <p className="text-[#5A5550] py-[50px] text-center ">
                <h1 className="text-[25px] font-medium">개인회원</h1>
                <h2 className="mt-[10px]">
                  개인회원을 위한 회원가입 절차입니다.
                </h2>
              </p>
              <button className="bg-[#5A5550] text-white mb-[50px] w-full h-[50px] font-medium text-[18px] rounded-md">
                <Link href="/pages/mypage/unlogin/join/member">회원가입</Link>
              </button>
            </div>
            <div className="w-[350px]">
              <hr className="border-[#5A5550] border-[2px]"></hr>
              <p className="text-[#5A5550] py-[50px] text-center ">
                <h1 className="text-[25px] font-medium">판매자</h1>
                <h2 className="mt-[10px]">
                  판매자를 위한 휘원가입 절차입니다.
                </h2>
              </p>
              <button className="bg-[#5A5550] text-white mb-[50px] w-full h-[50px] font-medium text-[18px] rounded-md">
                <Link href="/pages/mypage/unlogin/join/seller">회원가입</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
