import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterName, setFilterName] = useState("all");

  const handleSearchParamChange = (value) => {
    searchParams.set("filter", value);
    setSearchParams(searchParams);
    setFilterName(value);
  };

  return (
    <div className="container mx-auto text-white flex justify-center items-center gap-2.5 py-2.5">
      <div
        className={`px-2 py-1 cursor-pointer rounded ${
          filterName === "all" ? "bg-primary" : ""
        }`}
        onClick={() => handleSearchParamChange("all")}
      >
        All
      </div>
      <div
        className={`px-2 py-1 cursor-pointer rounded ${
          filterName === "new" ? "bg-primary" : ""
        }`}
        onClick={() => handleSearchParamChange("new")}
      >
        New
      </div>
      <div
        className={`px-2 py-1 cursor-pointer rounded ${
          filterName === "old" ? "bg-primary" : ""
        }`}
        onClick={() => handleSearchParamChange("old")}
      >
        Old
      </div>
    </div>
  );
};

export default Categories;
