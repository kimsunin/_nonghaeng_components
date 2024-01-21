import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CheckBox from "@/components/CheckBox";

export default function Home() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <main id="main">
        <section className="mt-20 bg-slate-400 w-full h-main_section1">
          <div className="mx-auto w-5/6 h-full">
            <div className="absolute bg-[#FFC83B]/80 w-5/6 h-28 bottom-36 rounded-[3px]">
              <CheckBox />
            </div>
          </div>
        </section>
        <section className="bg-slate-600 w-5/6 h-main_section2 mx-auto"></section>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
