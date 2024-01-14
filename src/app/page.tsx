import Image from "next/image";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <main id="main"></main>
      <footer id="footer"></footer>
    </div>
  );
}
