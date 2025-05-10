import React from 'react';
import Carousel from '../../common/carousel';
import { Category } from '@/types/types';
import { SectionTop } from '../../common/sectionTop';
import CardCategorySlider from '@/components/common/Card/CardCategorySlider/CardCategorySlider';


export default function CategoryCarousel({ data }: { data: Category[] }) {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  };
  return (
    <div className="flex flex-col gap-6 w-4/5">
      <SectionTop
        mainText={['\nهر ملکی بخوای\nاینجا پیدا میشه!'] } 
      
        subText={[
          'با کلیک به روی هر دسته بندی می توانید تمام آگهی \nمربوط آن را مشاهده کنید و به ملک مورد علاقه خود برسید',
        ]}
        chipText="دسته بندی"
      />
      <Carousel className="mt-4" breakpoints={breakpoints}>
        {data.map((item) => (
          <CardCategorySlider
            key={item.id}
            href={`houses/${item.id}`}
            text={item.name}
          />
        ))}
      </Carousel>
    </div>
  );
}
