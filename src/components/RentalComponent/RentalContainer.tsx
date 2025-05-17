"use client";
import RentalFilter from "./RentalFilter";
import RentalCard from "./RentalCard";
import CustomBreadcrumbs from "./CustomBreadcrumbs";

const items = [
  { label: "خانه", href: "/" },
  { label: "املاک", href: "/properties" },
  { label: "رزرو" },
];

const rentals = [
  {
    title: "هتل سراوان راین رشت",
    rating: "۴ ستاره",
    location: "گیلان، رشت، میدان آزادی، روبه‌روی پاساژ...",
    image: "/heropic.jpg",
    bedrooms: 4,
    parking: 1,
    baths: 2,
    price: "۱٬۵۰۰٬۰۰۰",
    link: "#",
  },
  {
    title: "هتل نسترن",
    rating: "۳ ستاره",
    location: "گیلان، انزلی، بلوار ساحلی...",
    image: "/heropic.jpg",
    bedrooms: 3,
    parking: 2,
    baths: 1,
    price: "۱٬۲۰۰٬۰۰۰",
    link: "#",
  },
{
    title: "هتل قو",
    rating: "۳ ستاره",
    location: "گیلان، انزلی، بلوار ساحلی...",
    image: "/heropic.jpg",
    bedrooms: 3,
    parking: 2,
    baths: 1,
    price: "۱٬۲۰۰٬۰۰۰",
    link: "#",
  },
  {
    title: "هتل اطلس",
    rating: "۳ ستاره",
    location: "گیلان، انزلی، بلوار ساحلی...",
    image: "/heropic.jpg",
    bedrooms: 3,
    parking: 2,
    baths: 1,
    price: "۱٬۲۰۰٬۰۰۰",
    link: "#",
  },
];

export default function RentalContainer() {
  return (
    <div className="w-full p-4 md:p-8 space-y-6">
      <CustomBreadcrumbs items={items} />
      <RentalFilter />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rentals.map((rental, index) => (
          <RentalCard key={index} {...rental} />
        ))}
      </div>
    </div>
  );
}