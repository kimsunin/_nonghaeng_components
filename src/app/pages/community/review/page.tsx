import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { communityHref } from "@/storage/href";

export default function community() {
  return (
    <>
      <nav id="nav">
        <Navigation hrefProps={communityHref} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>농행후기 컴포넌트</h1>
        </div>
      </main>
    </>
  );
}
