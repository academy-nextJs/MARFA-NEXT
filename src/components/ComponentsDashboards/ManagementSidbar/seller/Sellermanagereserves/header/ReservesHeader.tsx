
import CommonInput from '@/components/common/inputs/input-btn'
import FilterModalReserve from '@/components/ComponentsDashboards/modal/FilterModalReserve'
import React from 'react'

const ReservesHeader = () => {
    return (
        <div className='flex w-full max-md:flex-col gap-4 justify-between items-start md:items-center'>
            <h2> لیست رزروهای مشتریان </h2>
            <div className='flex gap-4 max-md:flex-col md:w-fit w-full items-end'>
                <div className='relative flex items-center max-md:w-full'>
                    <CommonInput classname='text-subText placeholder:subText border-subText md:w-[400px] w-full' color='text-subText' label='جستجو' placeholder='نام مسافر مورد نظر .....' />
                </div>
                <FilterModalReserve />
            </div>
        </div>
    )
}

export default ReservesHeader
