

import { FilterModalProps } from '@/src/types/types';
import { Select, SelectItem } from '@heroui/react';
import ReactDOM from 'react-dom';
import { ClientButton } from '../../common/Button/common-btn';
import Calender from '../../common/Calender/calender';
import CommonInput from '../../common/inputs/input-btn';

const SearchModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="z-[9999] fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-xs"
      onClick={handleBackgroundClick}
    >
      <aside className="relative bg-white shadow-xl p-6 rounded-xl w-[700px]">
        <aside className="flex flex-row gap-2 mb-6">
          <ClientButton className='bg-[#7575FE] h-9 text-white'>
            <div className='bg-white rounded-full w-2 h-2'></div>
            رهن و اجاره
          </ClientButton>
          <ClientButton className='bg-[#F0F0F0] h-9 text-black'>
            رزرو ملک
          </ClientButton>
          <ClientButton className='bg-[#F0F0F0] h-9 text-black'>
            خرید و فروش
          </ClientButton>
        </aside>

        <aside className='flex flex-row gap-6'>
          <aside className='flex flex-col w-1/2'>
            <span className="mb-2 font-medium text-sm text-right">انتخاب مقصد</span>
            <Select label=" انتخاب کنید " className='w-1//2' radius='full' size='sm' >
              <SelectItem>نور</SelectItem>
              <SelectItem>ساری</SelectItem>
            </Select>
          </aside>

          <aside className='flex flex-col w-1/2'>
            <CommonInput
              label="تعداد نفرات"
              placeholder="وارد کنید"
              className='bg-[#f4f3f3] p-4 rounded-full h-12'
            />
          </aside>
        </aside>
        <aside className='flex flex-row gap-6 mt-4 font-medium'>
          <aside className='flex flex-col w-1/2'>
            <span className="mb-2 font-medium text-sm text-right"> تاریخ ورود</span>
            <Calender />
          </aside>

          <aside className='flex flex-col w-1/2'>
            <span className="mb-2 font-medium text-sm text-right"> تاریخ خروج</span>
            <Calender />
          </aside>
        </aside>

        <aside className="flex mt-6">
          <ClientButton className='bg-[#7575FE] h-9 text-white'>
            مشاهده نتیجه
          </ClientButton>
        </aside>

      </aside>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default SearchModal;
