"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCarousel from "../../common/Card/CardCategorySlider/CardCategorySlider";
import Carousel from "../../common/carousel";
import Loading from "../../common/loading";
interface Locations {
  id: string;
  area_name: string;
  lat: string;
  long: string;
}
export default function SwiperPlaceDreams() {
  const [locations, setLocations] = useState<Locations[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://delta-project.liara.run/api/locations"
        );

        const newLocation: Locations = {
          id: "342",
          area_name: "ساری ",
          lat: "35.6892",
          long: "51.3890",
        };
        setLocations([...data, newLocation]);
        setLoading(false);
      } catch (err: unknown) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  const breakpoints = {
    0: {
      slidesPerView: 3.5 - 2,
    },
    768: {
      slidesPerView: 3.5 - 1,
    },
    1280: {
      slidesPerView: 3.5,
    },
  };
  return (
    <>
      <Carousel slidesPerView={3.5} breakpoints={breakpoints}>
        {locations.map((item) => (
          <CategoryCarousel
            key={item.id}
            href={`houses/${item.id}`}
            text={item.area_name}
          />
        ))}
      </Carousel>
    </>
  );
}
