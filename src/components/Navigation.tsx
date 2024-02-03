import Link from "next/link";
import Image from "next/image";
import navigationBg from "../storage/img/navigationBg.jpg";

export default function Navigation({ hrefProps }) {
  const mainMenuItem = hrefProps.mainMenu;
  const subMenuItem = hrefProps.subMenu;
  const subMenu = subMenuItem.map((item, index) => (
    <li className="py-[8px] px-[25px] text-white">
      <Link key={index} href={item.href}>
        {item.title}
      </Link>
    </li>
  ));

  return (
    <div className="nav_inner h-full">
      <div className="nav_menu w-10/12 mx-auto">
        <div className="mainMenu absolute mt-[170px] h-[80px] z-20 flex">
          <div className="bg-[#98CC28] w-[12px] my-[22px] h-[36px] rounded-full"></div>
          <Link
            href={mainMenuItem.href}
            className="text-[#5A5550] py-[12px] pl-[16px] text-[36px] "
          >
            {mainMenuItem.title}
          </Link>
        </div>
        <ul className="subMenu absolute left-1/2 mt-[190px] z-10 flex">
          {subMenu}
        </ul>
      </div>
      <div className="menu_bg w-full h-full">
        <div className="bg-white absolute w-full h-[40px] mt-[210px]"></div>
        <div className="bg-[#98CC28] absolute w-1/2 h-[80px] mt-[170px] right-0 rounded-l-full"></div>
      </div>
    </div>
  );
}
