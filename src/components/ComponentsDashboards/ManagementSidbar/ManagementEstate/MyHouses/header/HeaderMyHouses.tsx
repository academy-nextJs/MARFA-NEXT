import FilterModal from "@/components/ComponentsDashboards/modal/FilterModal";
import React from "react";
import SearchBar from "./SearchBar";
import Breadcrumb from "../../../profildashboard/Breadcrumb";

const HeaderMyHouses = () => {
  return (
    <div className="flex w-full max-md:flex-col gap-4 mt-5 justify-between items-start md:items-center">
      <Breadcrumb pageName="مدیریت املاک" />
      {/* <h2> لیست املاک من </h2> */}
      <div className="flex gap-4 max-md:flex-col md:w-fit h-10 w-full">
        <div className="relative flex items-center max-md:w-full">
          <SearchBar titleplace = "ملک مورد نظر را ..."/>
        </div>
        <FilterModal />
      </div>
    </div>
  );
};

export default HeaderMyHouses;
