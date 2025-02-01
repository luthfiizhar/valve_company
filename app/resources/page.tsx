"use client";
import SectionTitle from "../components/SectionTitle";
import ResourcesComponent from "./ResourcesComponent";
import { useState, useEffect } from "react";

// const userManualList = [
//   { text: "Split Body Ball Valve", downloadURL: "", imageURL: "" },
//   { text: "Fully Welded Ball Valve", downloadURL: "", imageURL: "" },
//   { text: "Top Entry Bal Valve", downloadURL: "", imageURL: "" },
//   { text: "Gate Valve", downloadURL: "", imageURL: "" },
//   { text: "Swing Check Valve", downloadURL: "", imageURL: "" },
//   { text: "Globe Valve", downloadURL: "", imageURL: "" },
//   { text: "Plug Valve", downloadURL: "", imageURL: "" },
//   { text: "Instrumental Valve", downloadURL: "", imageURL: "" },
//   { text: "Tube Fittings", downloadURL: "", imageURL: "" },
//   { text: "API 602 Forged Valve", downloadURL: "", imageURL: "" },
// ];
// const catalogueList = [
//   { text: "Split Body Ball Valve", downloadURL: "", imageURL: "" },
//   { text: "Fully Welded Ball Valve", downloadURL: "", imageURL: "" },
//   { text: "Top Entry Bal Valve", downloadURL: "", imageURL: "" },
//   { text: "Gate Valve", downloadURL: "", imageURL: "" },
//   { text: "Swing Check Valve", downloadURL: "", imageURL: "" },
//   { text: "Globe Valve", downloadURL: "", imageURL: "" },
//   { text: "Plug Valve", downloadURL: "", imageURL: "" },
//   { text: "Instrumental Valve", downloadURL: "", imageURL: "" },
//   { text: "Tube Fittings", downloadURL: "", imageURL: "" },
//   { text: "API 602 Forged Valve", downloadURL: "", imageURL: "" },
// ];
// const quickSheetList = [
//   { text: "Split Body Ball Valve", downloadURL: "", imageURL: "" },
//   { text: "Fully Welded Ball Valve", downloadURL: "", imageURL: "" },
//   { text: "Top Entry Bal Valve", downloadURL: "", imageURL: "" },
//   { text: "Gate Valve", downloadURL: "", imageURL: "" },
//   { text: "Swing Check Valve", downloadURL: "", imageURL: "" },
//   { text: "Globe Valve", downloadURL: "", imageURL: "" },
//   { text: "Plug Valve", downloadURL: "", imageURL: "" },
//   { text: "Instrumental Valve", downloadURL: "", imageURL: "" },
//   { text: "Tube Fittings", downloadURL: "", imageURL: "" },
//   { text: "API 602 Forged Valve", downloadURL: "", imageURL: "" },
// ];
// const certificateList = [
//   { text: "ISO 15848-1", downloadURL: "", imageURL: "" },
//   { text: "6D-0714 2026", downloadURL: "", imageURL: "" },
//   { text: "F-273H1 H1", downloadURL: "", imageURL: "" },
//   { text: "PED CE 2014 68", downloadURL: "", imageURL: "" },
//   { text: "ISO 9001 2015", downloadURL: "", imageURL: "" },
// ];

interface Data {
  message: string;
  data: Product[];
}

interface Product {
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

interface DataCertificate {
  message: string;
  data: Certificate[];
}

interface Certificate {
  id: string;
  name: string;
  coverImageURL: string;
  fileURL: string;
}

const ResourcePage = () => {
  const [data, setData] = useState<Data>();
  const [certificateData, setCertificateData] = useState<DataCertificate>();
  const [isLoading, setLoading] = useState(true);
  const [isLoadingCertificate, setLoadingCertificate] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        fetch("http://localhost:3000/api/certificate")
          .then((res) => res.json())
          .then((data) => {
            setCertificateData(data);
            setLoadingCertificate(false);
          });
      });
  }, []);

  if (isLoading) return <p>Loading ...</p>;
  if (isLoadingCertificate) return <p>Loading ...</p>;
  if (!data) return <p>No profile data</p>;
  if (!certificateData) return <p>No profile data</p>;

  const products: Product[] = data.data;
  const certificate: Certificate[] = certificateData.data;
  return (
    <div className="container w-full flex flex-col  gap-[24px] items-center lg:items-start">
      <div className="flex flex-col gap-[28px] items-center lg:items-start  w-full">
        <SectionTitle title="User Manual" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[24px] gap-y-[28px] justify-center lg:justify-center lg:gap-x-[48px]">
          {products.map((item, index) => {
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
      <div className="flex flex-col gap-[28px] items-center lg:items-start  w-full">
        <SectionTitle title="Catalogue" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[24px] gap-y-[28px] justify-center lg:justify-center lg:gap-x-[48px]">
          {products.map((item, index) => {
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
      <div className="flex flex-col gap-[28px] items-center lg:items-start  w-full">
        <SectionTitle title="Quick Sheet" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[24px] gap-y-[28px] justify-center lg:justify-center lg:gap-x-[48px] ">
          {products.map((item, index) => {
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
      <div className="flex flex-col gap-[28px] items-center lg:items-start w-full">
        <SectionTitle title="Certification" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[24px] gap-y-[28px] justify-center  lg:justify-center lg:gap-x-[48px]">
          {certificate.map((item, index) => {
            return (
              <ResourcesComponent
                key={index}
                text={item.name}
                downloadURL={item.fileURL}
                coverURL={item.coverImageURL}></ResourcesComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
