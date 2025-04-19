"use client";
import Skeleton from "react-loading-skeleton";
import SectionTitle from "../components/SectionTitle";
import ResourcesComponent from "./ResourcesComponent";
import { useState, useEffect, PropsWithChildren } from "react";
import CertificateComponent from "./CertificateComponent";


interface ProductProps {
  id: string;
  name: string;
  description: string;
  userManualCoverImageURL: string;
  catalogueCoverImageURL: string;
  quicksheetCoverImageURL: string;
  userManualFileURL: string;
  catalogueFileURL: string;
  quicksheetFileURL: string;
}

function Box({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="rounded-lg block pb-10 h-40 lg:h-96 w-full">{children}</div>
  );
}

const ResourcePage = () => {
  const [data, setData] = useState<ProductProps[]>();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="container w-full">
        <Skeleton
          className="h-full rounded-lg"
          wrapper={Box}
          count={5}></Skeleton>
      </div>
    );
  }

  if (!data) return <p>No product data</p>;

  const userManuals: ProductProps[] = data.filter((item) => item.userManualFileURL != "-");

  const catalogues: ProductProps[] = data.filter((item) => item.catalogueFileURL != "-");

  const quicksheets: ProductProps[] = data.filter((item) => item.quicksheetFileURL != "-");



  return (
    <div className="container w-full flex flex-col gap-[24px] items-center lg:items-start">
      <div className="flex flex-col gap-[28px] items-start lg:items-start  w-full">
        <SectionTitle title="Catalogue" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[16px] gap-y-[28px] justify-start lg:justify-start lg:gap-x-[48px]">
          {catalogues.map((item, index) => {
            return (
              <ResourcesComponent
                key={index}
                text={item.name}
                downloadURL={item.catalogueFileURL}
                coverURL={item.catalogueCoverImageURL}></ResourcesComponent>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[28px] items-start lg:items-start  w-full">
        <SectionTitle title="Quick Sheet" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[16px] gap-y-[28px] justify-start lg:justify-start lg:gap-x-[48px] ">
          {quicksheets.map((item, index) => {
            return (
              <ResourcesComponent
                key={index}
                text={item.name}
                downloadURL={item.quicksheetFileURL}
                coverURL={item.quicksheetCoverImageURL}></ResourcesComponent>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[28px] items-start lg:items-start  w-full">
        <SectionTitle title="User Manual" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[16px] gap-y-[28px] justify-start lg:justify-start lg:gap-x-[48px]">
          {userManuals.map((item, index) => {
            return (
              <ResourcesComponent
                key={index}
                text={item.name}
                downloadURL={item.userManualFileURL}
                coverURL={item.userManualCoverImageURL}></ResourcesComponent>
            );
          })}
        </div>
      </div>


      <div className="flex flex-col gap-[28px] items-start lg:items-start w-full">
        <SectionTitle title="Certification" isOneLine={true}></SectionTitle>
        <CertificateComponent></CertificateComponent>
      </div>
    </div>
  );
};

export default ResourcePage;
