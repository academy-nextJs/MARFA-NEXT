
import React from "react";
import Logo from "/public/AlFA.png";
import Image from "next/image";
import { ButtonSelected } from "@/components/common/Button/button";
import {
  HeaderFastSelect,
  HeaderOptionSelect,
} from "@/components/common/headerSelect";
import { ClientButton } from "@/components/common/ClientUi";
import { Button } from "@heroui/react";
import {Divider} from "@heroui/divider";
import Link from "next/link";
import DarkSwitcher from "@/components/DarkSwitcher";
import HambergerMenu from "./HambergerMenu";



const Header = () => {
  return (
    <>
      <div className="lg:hidden">
        <HambergerMenu/>
      </div>
      <aside className="hidden md:flex items-center gap-4">
        <ButtonSelected className="flex bg-[#F0F0F0]  h-12 text-black">
          <div className="rounded-full w-2 h-2"></div>
          خانه
        </ButtonSelected>
        <ButtonSelected className="bg-[#F0F0F0] h-12 text-black">
          مقالات
        </ButtonSelected>
        <ButtonSelected className="bg-[#F0F0F0] h-12 text-black">
          درباره آلفا
        </ButtonSelected>
      </aside>
      <Image 
      src={Logo.src} alt="Logo" width={78} height={78} />
      <aside className="hidden lg:flex justify-center items-center gap-4">
        <HeaderOptionSelect />
        <HeaderFastSelect />
        <Link href='/register'>
          {/* <Divider orientation="vertical" className="w-[2px] h-6" /> */}
          <Button className="bg-[#7575FE] h-12 text-white">
            ثبت نام / ورود
          </Button>
          
        </Link>
      </aside>
      <aside className="lg:hidden">
        <ClientButton className="bg-[#7575FE] h-12 text-white">
          ثبت نام / ورود
        </ClientButton>
      </aside>
        <DarkSwitcher/>
    </>
  );
};

export default Header;
