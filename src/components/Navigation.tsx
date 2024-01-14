import Link from "next/link";
import Image from "next/image";
import navigationBg from "../storage/img/navigationBg.jpg";

export default function Navigation({ hrefProps }) {
  const subMenuItem = hrefProps.subMenu;
  const subMenu = subMenuItem.map((item, index) => (
    <Link key={index} href={item.href} className="p-5">
      {item.title}
    </Link>
  ));

  return (
    <div className="nav_inner h-full">
      <div className="nav_menu w-10/12 mx-auto">
        <div className="mainMenu absolute mt-32 z-20">
          <Link href={hrefProps.mainMenu.href} className="text-3xl">
            {hrefProps.mainMenu.title}
          </Link>
          <div className="mt-4">홈 > {hrefProps.mainMenu.title}</div>
        </div>
        <div className="subMenu absolute left-2/4 mt-36 z-10">{subMenu}</div>
      </div>
      <div className="menu_bg w-full h-full">
        <Image src={navigationBg} className="absolute h-48" />
        <div className="bg-slate-300 absolute w-full h-8 mt-44"></div>
        <div className="bg-slate-500 absolute w-3/5 h-24 mt-28 right-0"></div>
      </div>
    </div>
  );
}
