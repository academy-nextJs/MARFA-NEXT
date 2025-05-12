import React from 'react'
import InfiniteCarousel from './InfiniteCarousel'
import { SectionTop } from '@/components/common/sectionTop'

const CommeNtUserComponent = () => {
  return (
     <section className="my-10">
          <SectionTop
            mainText={["نظرات کاربران درباره آلفا"]}
            subText={[
              "تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های\n املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .",
            ]}
          />
          <div className='w-[110%] mr-[-5%]'>
          <InfiniteCarousel />

          </div>
        </section>
  )
}

export default CommeNtUserComponent
