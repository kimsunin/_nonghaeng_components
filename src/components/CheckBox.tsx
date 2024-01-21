import Image from "next/image";
import search from "../storage/img/home/search.png";

export default function CheckBox() {
  return (
    <form className="search_form mx-auto w-5/6 h-full flex items-center justify-between">
      <div className="bg-white w-52 h-12 rounded-[5px]">지역 체크박스</div>
      <div className="bg-white w-52 h-12 rounded-[5px]">유형 체크박스</div>
      <div className="w-88 h-12 flex">
        <input
          className="w-60 h-full rounded-[5px]"
          placeholder="  검색어를 입력해보세요."
        ></input>
        <button className="bg-[#5A5550] ml-4 w-20 h-full rounded-[5px] flex">
          <h1 className="text-white p-3">검색</h1>
          <Image src={search} alt="search" className="w-5 pt-3" />
        </button>
      </div>
    </form>
  );
}
