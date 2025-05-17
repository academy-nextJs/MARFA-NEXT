import React from 'react'
import ChipText from '../common/chipLabel/ChipText';

  const facilities = [
    // { id: 1, name: "اینترنت رایگان", ansver:"دارد", icon: <FiWifi className="text-xl" /> },
    // { id: 2, name: "صبحانه رایگان", ansver:"دارد" ,icon: <FiCoffee className="text-xl" /> },
    // { id: 3, name: "تلویزیون", ansver:"دارد",icon: <FiTv className="text-xl" /> },
    // { id: 4, name: "دسترسی آسان", ansver:"دارد" ,icon: <FiMapPin className="text-xl" /> },
    { id: 5, name: "اتاق", ansver: "4 خواب" },
    { id: 6, name: "گرمایش ", ansver: "شوفاژ" },
    { id: 7, name: "سرمایش", ansver: "کولر" },
    { id: 8, name: "بالکن ", ansver: "دارد" },
    { id: 4, name: "اجاق گاز ", ansver: "دارد" },
    { id: 5, name: "پارکینگ", ansver: " دارد" },
    { id: 6, name: "اسانسور", ansver: "دارد" },
    { id: 7, name: "حمام", ansver: "دارد" },
    { id: 8, name: "نوع نما ", ansver: "رومی" },
    { id: 9, name: "سن بنا ", ansver: "نوساز" },
    { id: 10, name: "اپن  ", ansver: "سنگی" },
    { id: 11, name: "خط تلفن", ansver: " دارد" },
  ];
const HotelFacilities = () => {
  return (
    <div className="space-y-2 p-8 pr-0 ">
     <ChipText ChipText={"امکانات هتل"} />
     <div className="flex flex-wrap gap-2">
      {facilities.map((facility) => (
        <div
          key={facility.id}
          className="flex space-x-2 w-24 p-10 items-center gap-5 px-2 py-1 rounded-full"
        >
          {/* {facility.icon}  */}

          <div className="border-r-1 space-y-3 flex flex-col p-3 my-2" >
          <span className=" text-blue-700">
            {facility.name}
          </span>
           <span>
           {facility.ansver}
            </span>
        
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default HotelFacilities
