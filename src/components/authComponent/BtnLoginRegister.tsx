import { Button } from '@heroui/react';
import React from 'react'
import { FcGoogle, FcIphone} from "react-icons/fc";

const BtnLoginRegister = () => {
  return (
    <div className="flex flex-grow gap-3  my-6 text-base">
    <Button
      startContent={<FcGoogle />}
      variant="bordered"
      className="rounded-[31px] w-[187px]"
    >
      ورود با گوگل
    </Button>
    <Button
      startContent={<FcIphone/>}
      variant="bordered"
      className="rounded-[31px]  w-[187px]"
      >
      ورود با موبایل
    </Button>
  </div>
  )
}

export default BtnLoginRegister
