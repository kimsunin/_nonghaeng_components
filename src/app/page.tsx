import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckBox from "@/components/CheckBox";
import section1_img from "../storage/img/home/main_section1.png";
import more2 from "../storage/img/home/more2.png";
import more3 from "../storage/img/home/more3.png";
import more1 from "../storage/img/home/more1.png";

export default function Home() {
  const travel = [1, 2, 3, 4, 5, 6, 7, 8];

  const list1 = travel
    .filter((index) => index < 5)
    .map((item, index) => (
      <div
        key={index}
        className="bg-slate-300 w-[200px] h-[200px] rounded-[30px]"
      >
        {item}
      </div>
    ));
  const list2 = travel
    .filter((index) => index > 4)
    .map((item, index) => (
      <div
        key={index}
        className="bg-slate-300 w-[200px] h-[200px] rounded-[30px]"
      >
        {item}
      </div>
    ));

  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <main id="main">
        <section className="mt-20 bg-slate-400 w-full h-[500px]">
          <Image
            src={section1_img}
            alt="section1_img"
            priority={false}
            className="w-full h-full"
          />
          <div className="mx-auto w-5/6 h-full">
            {/* <div className="absolute bg-slate-400 top-20 w-[400px] h-[500px]"></div> */}
            <h1 className="absolute top-40 text-[#614426] text-[25px]">
              똑같은 여행은 지루해...
              <p />
              농행동행이 도와드릴게요!
            </h1>
            <h2 className="absolute top-64 text-[#887664]">
              테마별 숨은 명소를 모두 모아
              <p />더 편안한 여행계획을 만드는 똑똑한 플랫폼
            </h2>
            <Link
              href="pages//introduce"
              className="absolute top-[360px] bg-[#FF7A00] flex h-[35px] w-[200px] rounded-full items-center"
            >
              <h1 className="px-[20px] text-white">농행동행 알아보기</h1>
              <Image
                src={more1}
                alt="more_information"
                priority={false}
                className="w-[22px] h-[9px]"
              />
            </Link>
            <CheckBox />
          </div>
        </section>
        <section className="w-5/6 h-[500px] mt-[100px] mx-auto">
          <div className="w-full h-[60px] flex justify-between items-center">
            <h1 className="text-[25px]">우수 체험</h1>
            <Link
              href="/pages/trip/experience"
              className="text-[#82BF00] items-center flex"
            >
              더 많은 농촌체험 보러가기
              <Image
                src={more2}
                alt="more_information"
                priority={false}
                className="ml-4 w-[9px] h-[14px]"
              />
            </Link>
          </div>
          <div className="w-full h-[200px] flex justify-between">{list1}</div>
          <div className="w-full h-[200px] mt-[40px] flex justify-between">
            {list2}
          </div>
        </section>
        <section className="w-5/6 h-[500px] my-[50px] mx-auto">
          <div className="w-full h-[60px] flex justify-between items-center">
            <h1 className="text-[25px]">우수 숙박</h1>
            <Link
              href="/pages/trip/lodgment"
              className="text-[#82BF00] items-center flex"
            >
              더 많은 농촌숙박 보러가기
              <Image
                src={more2}
                alt="more_information"
                priority={false}
                className="ml-4 w-[9px] h-[14px]"
              />
            </Link>
          </div>
          <div className="w-full h-[200px] flex justify-between">{list1}</div>
          <div className="w-full h-[200px] mt-[40px] flex justify-between">
            {list2}
          </div>
        </section>
        <section className="w-5/6 h-[400px] my-[50px] mx-auto flex justify-between">
          <div className="w-[450px] h-full">
            <div className="w-full h-[60px] flex justify-between items-center">
              <h1 className="text-[25px]">공지사항</h1>
              <Link
                href="/pages/community/notification"
                className="text-[#FF7A00] items-center flex"
              >
                MORE
                <Image
                  src={more3}
                  alt="more_information"
                  priority={false}
                  className="ml-4 w-[9px] h-[14px]"
                />
              </Link>
            </div>
            <div className="bg-slate-200 w-full h-[340px]"></div>
          </div>
          <div className="w-[450px] h-full">
            <div className="w-full h-[60px] flex justify-between items-center">
              <h1 className="text-[25px]">농행후기</h1>
              <Link
                href="/pages/community/review"
                className="text-[#FF7A00] items-center flex"
              >
                MORE
                <Image
                  src={more3}
                  alt="more_information"
                  priority={false}
                  className="ml-4 w-[9px] h-[14px]"
                />
              </Link>
            </div>
            <div className="bg-slate-200 w-full h-[340px]"></div>
          </div>
        </section>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
// 2500
