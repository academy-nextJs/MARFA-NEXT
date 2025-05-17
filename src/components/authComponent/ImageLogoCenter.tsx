import Image from 'next/image';
import React from 'react';
import Logo from '/public/AlFA.svg';


const ImageLogoCenter = () => {
  return (
    <>
      <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 top-24 z-10 dark:invert-100'>
          <Image
            className="relative z-10"
            src={Logo.src}
            alt="Logo"
            width={78}
            height={78}
          />
          <Image
            className="absolute left-0 top-0 h-full w-1/2 object-left object-cover invert z-20"
            src={Logo.src}
            alt="Logo"
            width={78}
            height={78}
          />
        </div>
    </>
  )
}

export default ImageLogoCenter
