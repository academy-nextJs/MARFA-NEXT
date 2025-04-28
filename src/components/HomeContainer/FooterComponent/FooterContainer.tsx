import Image from "next/image";
import React from "react";
import LogoFooter from "@/assets/image/AlFA.png";
import Foot1Image from "@/assets/image/footer1.svg";
import Foot2Image from "@/assets/image/footer2.svg";
import Foot3Image from "@/assets/image/footer3.svg";
import Footer from "./Footer";

export default function FooterContainer() {
  return (
    <>
      <Image src={LogoFooter.src} alt="Logo" width={96} height={96} />
      <Footer />
      <div className="flex gap-3">
        <div className="p-2 rounded-2xl bg-white">
          <Image src={Foot1Image.src} alt="1" width={48} height={48} />
        </div>
        <div className="p-2 rounded-2xl bg-black">
          <Image src={Foot2Image.src} alt="1" width={48} height={48} />
        </div>
        <div className="p-2 rounded-2xl bg-black">
          <Image src={Foot3Image.src} alt="1" width={48} height={48} />
        </div>
      </div>
    </>
  );
}
