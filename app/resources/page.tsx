import React from "react";
import SectionTitle from "../components/SectionTitle";
import ResourcesComponent from "./ResourcesComponent";

const userManualList = [
  { text: "Split Body Ball Valve", downloadURL: "", imageURL: "" },
  { text: "Fully Welded Ball Valve", downloadURL: "", imageURL: "" },
  { text: "Top Entry Bal Valve", downloadURL: "", imageURL: "" },
  { text: "Gate Valve", downloadURL: "", imageURL: "" },
  { text: "Swing Check Valve", downloadURL: "", imageURL: "" },
  { text: "Globe Valve", downloadURL: "", imageURL: "" },
  { text: "Plug Valve", downloadURL: "", imageURL: "" },
  { text: "Instrumental Valve", downloadURL: "", imageURL: "" },
  { text: "Tube Fittings", downloadURL: "", imageURL: "" },
  { text: "API 602 Forged Valve", downloadURL: "", imageURL: "" },
];
const catalogueList = [
  { text: "Split Body Ball Valve", downloadURL: "", imageURL: "" },
  { text: "Fully Welded Ball Valve", downloadURL: "", imageURL: "" },
  { text: "Top Entry Bal Valve", downloadURL: "", imageURL: "" },
  { text: "Gate Valve", downloadURL: "", imageURL: "" },
  { text: "Swing Check Valve", downloadURL: "", imageURL: "" },
  { text: "Globe Valve", downloadURL: "", imageURL: "" },
  { text: "Plug Valve", downloadURL: "", imageURL: "" },
  { text: "Instrumental Valve", downloadURL: "", imageURL: "" },
  { text: "Tube Fittings", downloadURL: "", imageURL: "" },
  { text: "API 602 Forged Valve", downloadURL: "", imageURL: "" },
];
const quickSheetList = [
  { text: "Split Body Ball Valve", downloadURL: "", imageURL: "" },
  { text: "Fully Welded Ball Valve", downloadURL: "", imageURL: "" },
  { text: "Top Entry Bal Valve", downloadURL: "", imageURL: "" },
  { text: "Gate Valve", downloadURL: "", imageURL: "" },
  { text: "Swing Check Valve", downloadURL: "", imageURL: "" },
  { text: "Globe Valve", downloadURL: "", imageURL: "" },
  { text: "Plug Valve", downloadURL: "", imageURL: "" },
  { text: "Instrumental Valve", downloadURL: "", imageURL: "" },
  { text: "Tube Fittings", downloadURL: "", imageURL: "" },
  { text: "API 602 Forged Valve", downloadURL: "", imageURL: "" },
];
const certificateList = [
  { text: "ISO 15848-1", downloadURL: "", imageURL: "" },
  { text: "6D-0714 2026", downloadURL: "", imageURL: "" },
  { text: "F-273H1 H1", downloadURL: "", imageURL: "" },
  { text: "PED CE 2014 68", downloadURL: "", imageURL: "" },
  { text: "ISO 9001 2015", downloadURL: "", imageURL: "" },
];

const ResourcePage = () => {
  return (
    <div className="container w-full flex flex-col  gap-[24px] items-center lg:items-start">
      <div className="flex flex-col gap-[28px] items-center lg:items-start  w-full">
        <SectionTitle title="User Manual" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[24px] gap-y-[28px] justify-center lg:justify-center lg:gap-x-[48px]">
          {userManualList.map((item, index) => {
            return (
              <ResourcesComponent
                key={index}
                text={item.text}
                downloadURL={item.downloadURL}></ResourcesComponent>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[28px] items-center lg:items-start  w-full">
        <SectionTitle title="Catalogue" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[24px] gap-y-[28px] justify-center lg:justify-center lg:gap-x-[48px]">
          {catalogueList.map((item, index) => {
            return (
              <ResourcesComponent
                key={index}
                text={item.text}
                downloadURL={item.downloadURL}></ResourcesComponent>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[28px] items-center lg:items-start  w-full">
        <SectionTitle title="Quick Sheet" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[24px] gap-y-[28px] justify-center lg:justify-center lg:gap-x-[48px] ">
          {quickSheetList.map((item, index) => {
            return (
              <ResourcesComponent
                key={index}
                text={item.text}
                downloadURL={item.downloadURL}></ResourcesComponent>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[28px] items-center lg:items-start w-full">
        <SectionTitle title="Certification" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[24px] gap-y-[28px] justify-center  lg:justify-center lg:gap-x-[48px]">
          {certificateList.map((item, index) => {
            return (
              <ResourcesComponent
                key={index}
                text={item.text}
                downloadURL={item.downloadURL}></ResourcesComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
