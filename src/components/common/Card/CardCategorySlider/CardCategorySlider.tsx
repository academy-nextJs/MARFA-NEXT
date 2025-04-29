"use client";

import { Card, CardFooter, Image, Button } from "@heroui/react";
// import framerSvg from "../../../../assets/image/Frame.svg";
function CardCategorySlider() {
  return (
    <div className="max-w-[500px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card
        isFooterBlurred
        className="w-[344px] h-[345px] col-span-12 sm:col-span-7 rounded-3xl"
      >
        <div className="flex justify-end">
          <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center relative top-10 mx-4 opacity-25 z-50">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 font-bold text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25"
              />
            </svg> */}
            <Image src="/Frame.svg" className="size-4 font-bold text-white" alt="framer" />
          </div>
        </div>

        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover rounded-3xl"
          src="https://heroui.com/images/card-example-5.jpeg"
        />
        <CardFooter className="absolute bottom-0 z-10 ">
          <Button radius="full" size="sm" className="text-white p-4">
            آپارتمانی
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export default CardCategorySlider;
