'use client';
import { Card, CardHeader, Image, Button, CardFooter } from '@heroui/react';
import { PiArrowUpLeft } from 'react-icons/pi';
import Link from 'next/link';
import { LandingCard2Props } from '@/types/types';

export default function CategoryCarousel({
  text = '',
  count,
  src,
  href,
}: LandingCard2Props) {
  return (
    <Card isBlurred className="relative border-none rounded-[10%] w-fit" >
      <CardHeader className="top-2 left-2 z-10 absolute flex justify-end w-full">
        <Link href={href}>
          <Button
            isIconOnly
            className="bg-white/20 hover:bg-white/20 backdrop-blur-lg"
            radius="full"
            size="lg"
          >
            <PiArrowUpLeft color="white" size="1.5em" />
          </Button>
        </Link>
      </CardHeader>
      <div className="relative">
        <Image
          alt="Woman listing to music"
          className="z-0 w-full object-cover aspect-square"
          src={src ? src : 'https://www.houseplans.net/news/wp-content/uploads/2023/07/51550-768.jpeg'}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}
      </div>
      <CardFooter className="bottom-0 z-10 absolute flex gap-2 px-6 py-8 font-semibold text-white text-2xl">
        <p>{text}</p>
        {count && (
          <span className="self-end font-light text-medium">{count} آپارتمان</span>
        )}
      </CardFooter>
    </Card>
  );
}
