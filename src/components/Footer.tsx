import Link from "next/link";
import { footerHref } from "@/storage/href";

export default function Footer() {
  const siteLinks = footerHref.map((item, index) => (
    <Link key={index} href={item.href} className="pr-5">
      {item.title}
    </Link>
  ));

  return (
    <div className="footer_inner w-10/12 mx-auto h-full">
      <hr className="absolute border-black left-0 w-full mt-16  " />
      <div className="footer_link h-32 ">
        <div className="subLink  h-16"></div>
        <div className="siteLink h-16 mt-5">{siteLinks}</div>
      </div>
      <div className="information h-20">사업자 소개</div>
      <div className="copyright ">저작권 관련 글</div>
    </div>
  );
}
