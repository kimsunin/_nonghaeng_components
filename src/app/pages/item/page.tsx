import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { itemHref } from "@/storage/href";

export default function Plan() {
  return (
    <>
      <nav id="nav">
        <Navigation hrefProps={itemHref} />
      </nav>
      <main id="main">
        <div id="content">
          <p className="bg-[#FFC83BCC] w-[200px] h-[40px] p-[8px] mx-auto mt-[100px] rounded-full text-center">
            기획중입니다...
          </p>
        </div>
      </main>
    </>
  );
}
