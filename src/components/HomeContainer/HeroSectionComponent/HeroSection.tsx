import Image from 'next/image';
import FilterButton from './SearchButton';
import StatCard from './Card';

const HeroSection = () => {
    return (

        <div className="relative bg-white mx-auto w-full max-w-[1200px] h-1/3 container">
            <div className="flex md:flex-row flex-col items-center gap-8">

                <div className="relative flex justify-center items-center w-full md:w-[530px]">
                    <div className="relative rounded-2xl w-full h-[430px]">
                        <Image
                            src="/hero.png"
                            alt="Modern apartment building"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-3xl"
                        />

                        <div className="top-1/2 left-2.5 absolute -translate-x-1/2 -translate-y-1/2 transform">
                            <FilterButton />
                        </div>
                    </div>
                </div>
                <div className="z-10 flex justify-center px-6 py-12 md:py-20 md:pl-16 lg:pl-20 w-full md:w-1/2">
                    <div className="mt-6 w-full">
                        <h4 className="mb-2 font-bold text-gray-800 text-xl text-right">
                            خانه ای که میخوای،
                        </h4>
                        <h2 className="mb-6 font-bold text-gray-800 text-xl text-right">
                            جایی که می‌خوای
                        </h2>
                        <p className="mb-8 text-[#767676] text-sm text-right">
                            رهن، اجاره، خرید و فروش ملک، مورد نظرتون
                            <br />
                            مثل آب خوردن فقط در دلتا
                        </p>

                        <StatCard />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default HeroSection;
