import React from "react";
import OurProductSection from "../components/ourProductsSection/OurProductSection";
import { Suspense } from "react";
import Loading from "./loading";

const Products = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <OurProductSection></OurProductSection>
      </Suspense>
    </div>
  );
};

export default Products;
