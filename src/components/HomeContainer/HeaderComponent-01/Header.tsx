"use client";
import React from "react";
import LogoLight from "/public/AlFA.png";
import LogoDark from "/public/DarkLogo.png";
import Image from "next/image";
import { ButtonHomeHeder } from "@/components/common/Button/button";
import {
  HeaderFastSelect,
  HeaderOptionSelect,
} from "@/components/common/headerSelect";
import { ClientButton } from "@/components/common/ClientUi";
import { Button } from "@heroui/react";
import Link from "next/link";
import DarkSwitcher from "@/components/HomeContainer/HeaderComponent-01/DarkSwitcher";
import HambergerMenu from "./HambergerMenu";
import { useTheme } from "next-themes";
import { ButtonHederSelected } from "@/components/common/Button/ButtonHomeHeder";

const Header = () => {
  const { theme } = useTheme();

  return (
    <>
      <header className="flex  mx-auto w-1/2 justify-center gap-2 md:w-[95%] md:justify-between font-yekan  items-center h-[48px] mt-5">
        <div className="lg:hidden">
          <HambergerMenu />
        </div>

        <ButtonHederSelected/>

        {/* logo alfa */}
       <div className="p-5" >
        
       <Image
          src={theme === "dark" ? LogoDark.src : LogoLight.src}
          alt="Logo"
          width={78}
          height={78}
        />
       </div>

        <aside className="hidden lg:flex justify-center items-center gap-4">
          <DarkSwitcher />

          <HeaderOptionSelect />
          <HeaderFastSelect />
          <Link href="/login">
            <Button className="bg-[#7575FE] h-12 text-white">
              ثبت نام / ورود
            </Button>
          </Link>
        </aside>

        {/* <aside className="lg:hidden">
        <ClientButton className="bg-[#7575FE] h-12 text-white">
          ثبت نام / ورود
        </ClientButton>
      </aside> */}
      </header>
    </>
  );
};

export default Header;
