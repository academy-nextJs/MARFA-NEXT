import FilterModalReserve from "@/components/ComponentsDashboards/modal/FilterModalReserve";
import React from "react";
import SearchBar from "../../../ManagementEstate/MyHouses/header/SearchBar";

const ReservesHeader = () => {
  return (
    <div className="flex w-full max-md:flex-col gap-4 justify-between items-start md:items-center">
      <h2> لیست رزروهای مشتریان </h2>
      <div className="flex gap-3 max-md:flex-col items-center md:w-fit w-full items-end">
        <SearchBar titleplace="نام مسافر مورد نظر ....." />
        <FilterModalReserve />
      </div>
    </div>
  );
};

export default ReservesHeader;
