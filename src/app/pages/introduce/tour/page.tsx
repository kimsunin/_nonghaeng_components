import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { introduceHref } from "@/storage/href";

export default function IntroduceChild2() {
  return (
    <>
      <nav id="nav">
        <Navigation hrefProps={introduceHref} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>농촌관광 소개 컴포넌트</h1>
        </div>
      </main>
    </>
  );
}
