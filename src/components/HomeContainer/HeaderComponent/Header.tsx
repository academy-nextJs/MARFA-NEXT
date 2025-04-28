import React from 'react'
import Logo from '/public/AlFA.png';
import Image from 'next/image';
import { ButtonSelected } from '@/components/common/Button';
import { HeaderFastSelect, HeaderOptionSelect } from '@/components/common/headerSelect';
import { ClientButton } from '@/components/common/Clientui';
// import Button from "";

const Header = () => {
  return (
    <>
    <div className="lg:hidden">
       <h1>headerRight</h1>
      </div>
      <aside className="items-center hidden gap-4 lg:flex">
        <ButtonSelected className="flex bg-[#F0F0F0] h-12 text-black">
          <div className='w-2 h-2 bg-black rounded-full'></div>
          خانه 
        </ButtonSelected>
        <ButtonSelected className="bg-[#F0F0F0] h-12 text-black">مقالات</ButtonSelected>
        <ButtonSelected className="bg-[#F0F0F0] h-12 text-black">درباره آلفا</ButtonSelected>
      </aside>
      <Image src={Logo.src} alt="Logo" width={78} height={78} />
      <aside className="items-center hidden gap-4 lg:flex">
      <HeaderFastSelect />
      <HeaderOptionSelect />
        {/* <p orientation="vertical" className="w-[2px] h-6" /> */}
        <ClientButton className="bg-[#7575FE] h-12 text-white">ثبت نام / ورود</ClientButton>
      </aside>
      <aside className='lg:hidden'>
        <ClientButton className="bg-[#7575FE] h-12 text-white">ثبت نام / ورود</ClientButton>
      </aside>
    </>
  )
}

export default Header
