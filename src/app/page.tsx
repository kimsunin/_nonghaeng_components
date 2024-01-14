import Image from "next/image";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <main id="main">
        <div className="mt-20">
          <h1>홈입니다</h1>
        </div>
      </main>
      <footer id="footer"></footer>
    </div>
  );
}
