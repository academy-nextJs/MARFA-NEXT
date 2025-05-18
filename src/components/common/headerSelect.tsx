'use client';

import { Select, SelectItem } from "@heroui/react";
import Link from "next/link";

export function HeaderFastSelect() {
  return (
    <Link href='/reserve'>
    <Select label="رزرو سریع" className='w-28' radius='full' size='sm'>
      {/* <SelectItem>ویلا</SelectItem> */}
      {/* <SelectItem>آپارتمان</SelectItem> */}
    </Select>
    </Link>
  );
}
export function HeaderOptionSelect() {
    return (
      <Link href='/rental'>
      
      <Select label="رهن و اجاره" className='w-28' radius='full' size='sm' >
        {/* <SelectItem>ویلا</SelectItem> */}
        {/* <SelectItem>آپارتمان</SelectItem> */}
      </Select>
      </Link>
    );
  }
  
