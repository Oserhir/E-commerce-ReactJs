import React from "react";

import Pagination from "../../Components/Uitily/Pagination";
import BrandContainer from "../../Components/Brand/BrandContainer";

const AllBrand = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <BrandContainer />
      <Pagination />
    </div>
  );
};

export default AllBrand;
