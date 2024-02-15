import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { sitemapHref } from "@/storage/href";

export default function SiteMap() {
  return (
    <>
      <nav id="nav">
        <Navigation hrefProps={sitemapHref} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>사이트맵 컴포넌트</h1>
        </div>
      </main>
    </>
  );
}
