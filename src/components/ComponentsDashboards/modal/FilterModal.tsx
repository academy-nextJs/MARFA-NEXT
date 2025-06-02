"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import CommonSelect from "@/components/common/inputs/common/CommonSelect";
import CommonButton from "@/components/common/Button/CommonButton";
import { Input } from "@/components/ui/input";

const FilterModal = () => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceFrom: "0",
    priceTo: "15000000",
    propertyType: "apartment",
    ownerStatus: "active",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleApplyFilters = async () => {
    console.log("ارسال به API:", filters);

    try {
      const res = await fetch("/api/filter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(filters),
      });
      const data = await res.json();

      console.log("داده‌های فیلترشده:", data);

      
      setOpen(false);
    } catch (error) {
      console.error("خطا در ارسال فیلتر:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="cursor-pointer px-4 py-2 rounded-[14px] flex justify-center text-white bg-blue-500 hover:bg-blue-600 transition-all w-full max-md:w-full">
          فیلترها
        </button>
      </DialogTrigger>

      <DialogContent
        onMouseDown={(e) => e.stopPropagation()}
        className="rounded-2xl py-8 px-6 w-full max-w-[600px] animate-in fade-in slide-in-from-bottom bg-blue-50"
      >
        <DialogTitle asChild>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-blue-700">فیلترها</h2>
            <CommonButton
              onclick={() => setOpen(false)}
              title="بستن"
              icon={<X />}
              classname="border border-blue-400 bg-transparent text-blue-400 hover:bg-blue-100"
            />
          </div>
        </DialogTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <CommonSelect
            label="نوع ملک"
            selectItems={[
              { label: "آپارتمان", value: "apartment" },
              { label: "ویلا", value: "villa" },
              { label: "خانه", value: "house" },
            ]}
            placeholder="آپارتمان"
            color="text-blue-700"
            classname="bg-blue-100 w-full"
            onChange={(val) => handleSelectChange("propertyType", val)}
          />
          <CommonSelect
            label="وضعیت مالک"
            selectItems={[
              { label: "فعال", value: "active" },
              { label: "غیرفعال", value: "inactive" },
            ]}
            placeholder="فعال"
            color="text-blue-700"
            classname="bg-blue-100 w-full"
            onChange={(val) => handleSelectChange("ownerStatus", val)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex gap-2 items-center whitespace-nowrap">
            <span className="text-blue-700">قیمت از</span>
            <Input
              value={filters.priceFrom}
              onChange={(e) => handleInputChange(e, "priceFrom")}
              className="bg-transparent border-b border-blue-300 px-3 py-2 w-full"
            />
            <span className="text-blue-700">تومان</span>
          </div>
          <div className="flex gap-2 items-center whitespace-nowrap">
            <span className="text-blue-700">قیمت تا</span>
            <Input
              value={filters.priceTo}
              onChange={(e) => handleInputChange(e, "priceTo")}
              className="bg-transparent border-b border-blue-300 px-3 py-2 w-full"
            />
            <span className="text-blue-700">تومان</span>
          </div>
        </div>

        <div className="w-fit mx-auto">
          <CommonButton
            title="اعمال فیلتر"
            onclick={handleApplyFilters}
            classname="bg-blue-500 hover:bg-blue-600 text-white transition-all"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;

// 'use client'
// import CommonSelect from '@/components/common/inputs/common/CommonSelect'
// import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
// import { X } from 'lucide-react'
// import React, { useState } from 'react'
// // import CommonButton from '@/components/common/buttons/common/CommonButton'
// import { Input } from '@/components/ui/input'
// import CommonButton from '@/components/common/Button/CommonButton'

// const FilterModal = () => {
//     const [open, setOpen] = useState<boolean>(false)
//     const [priceFrom, setPriceFrom] = useState("0")
//     const [priceTo, setPriceTo] = useState("15000000")

//     return (
//         <Dialog open={open} onOpenChange={setOpen} >
//             <DialogTrigger asChild>
//                 <div className='cursor-pointer px-4 py-2 rounded-[14px] h-fit flex text-primary-foreground max-md:w-full justify-center bg-primary text-sm hover:scale-[1.02] transition-all'>
//                     فیلتر ها
//                 </div>
//             </DialogTrigger>
//             <DialogContent onMouseDown={(e) => e.stopPropagation()} className='rounded-2xl py-8 px-6 w-full max-w-[600px]'>
//                 <DialogTitle>
//                     <div className='flex items-center justify-between mb-6'>
//                         <h2 className='text-xl font-bold'>فیلترها</h2>
//                         <CommonButton onclick={() => setOpen(false)} title='بستن' icon={<X />} classname='border border-danger bg-transparent text-danger' />
//                     </div>
//                 </DialogTitle>

//                 <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
//                     <CommonSelect
//                         label='نوع ملک'
//                         selectItems={[
//                             { label: 'آپارتمان', value: 'apartment' },
//                             { label: 'ویلا', value: 'villa' },
//                             { label: 'خانه', value: 'house' },
//                         ]}
//                         placeholder='آپارتمان'
//                         color='text-subText'
//                         classname='bg-gray-200 dark:bg-gray-800 w-full'
//                     />
//                     <CommonSelect
//                         label='وضعیت مالک'
//                         selectItems={[
//                             { label: 'فعال', value: 'active' },
//                             { label: 'غیرفعال', value: 'inactive' },
//                         ]}
//                         placeholder='فعال'
//                         color='text-subText'
//                         classname='bg-gray-200 dark:bg-gray-800 w-full'
//                     />
//                 </div>

//                 <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-6'>
//                     <div className='flex gap-2 whitespace-nowrap items-center'>
//                         <span className='text-subText'>قیمت از</span>
//                         <Input
//                             defaultValue={priceFrom}
//                             onChange={(e) => setPriceFrom(e.target.value)}
//                             className='bg-transparent rounded px-3 py-2 w-full'
//                         />
//                         <span className='text-subText'>تومان</span>
//                     </div>
//                     <div className='flex gap-2 whitespace-nowrap items-center'>
//                         <span className='text-subText'>قیمت تا</span>
//                         <Input
//                             defaultValue={priceTo}
//                             onChange={(e) => setPriceTo(e.target.value)}
//                             className='bg-transparent rounded px-3 py-2 w-full'
//                         />
//                         <span className='text-subText'>تومان</span>
//                     </div>
//                 </div>

//                 <div className='w-fit mx-auto'>
//                     <CommonButton title={"اعمال فیلتر"} />
//                 </div>
//             </DialogContent>
//         </Dialog>
//     )
// }

// export default FilterModal
