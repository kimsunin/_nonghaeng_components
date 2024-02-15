import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { tripHref } from "@/storage/href";

export default function Travel() {
  return (
    <>
      <nav id="nav">
        <Navigation hrefProps={tripHref} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>농촌여행 컴포넌트</h1>
        </div>
      </main>
    </>
  );
}
