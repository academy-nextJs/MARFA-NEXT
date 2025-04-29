
"use client"

import React from 'react';
import { Avatar, AvatarGroup } from '@heroui/react';
// import { Avatar, AvatarGroup } from '@heroui/react';

const StatCard = () => {
    return (
        <div className="flex justify-center items-end w-full">
            <div className="flex flex-row gap-2 sm:gap-4 w-full">
                <div className="bg-[#F9F9F9] shadow-lg mt-4 sm:mt-16 p-2 sm:p-3 rounded-2xl sm:rounded-3xl w-[30%] sm:w-[158px] h-[140px] sm:h-[165px] md:h-[185px] text-right">
                    <h2 className="m-0 font-bold text-black text-xs sm:text-sm text-right">بیش از</h2>
                    <p className="pt-1 sm:pt-2 font-semibold text-black text-xl sm:text-2xl md:text-3xl text-right">۵۰۰۰+</p>

                    <div className="flex flex-col items-center mt-1 sm:mt-2 rtl">
                        <AvatarGroup isBordered size="sm" className="scale-75 sm:scale-90 md:scale-100">
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        </AvatarGroup>
                        <p className="mt-1 sm:mt-2 text-[12px] text-black xs:text-xs text-right">
                            رضایت مشتریانی که به آلفا اعتماد کرده اند
                        </p>
                    </div>
                </div>


                <aside className="bg-[#DFDFFF] shadow-lg mt-2 sm:mt-10 p-2 sm:p-3 rounded-2xl sm:rounded-3xl w-[30%] sm:w-1/3 h-[160px] sm:h-[180px] md:h-[210px] text-right">
                    <h2 className="m-0 font-bold text-black text-xs sm:text-sm text-right">بیش از</h2>
                    <p className="pt-1 sm:pt-2 font-semibold text-black text-xl sm:text-2xl md:text-3xl text-right">۸۵۰۰+</p>
                    <p className="mt-1 sm:mt-2 text-[10px] text-black xs:text-xs text-right">منطقه برای رزرو، ویلا</p>
                </aside>

                <aside className="bg-[#F9F9F9] shadow-lg p-2 sm:p-3 rounded-2xl sm:rounded-3xl w-[30%] sm:w-1/3 h-[180px] sm:h-[210px] md:h-[250px] text-right">
                    <h2 className="m-0 font-bold text-black text-xs sm:text-sm text-right">بیش از</h2>
                    <p className="pt-1 sm:pt-3 font-semibold text-black text-xl sm:text-2xl md:text-3xl text-right">۹۰۰۰+</p>
                    <p className="mt-1 sm:mt-2 text-[10px] text-black xs:text-xs text-right">ملک برای رزرو رهن و اجاره</p>
                </aside>

            </div>
        </div>
    );
};

export default StatCard;