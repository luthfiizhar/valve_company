import React from "react";
import SectionTitle from "../components/SectionTitle";
import ResourcesComponent from "./ResourcesComponent";

const userManualList = [
  { text: "Split Body Ball Valve", downloadURL: "" },
  { text: "Fully Welded Ball Valve", downloadURL: "" },
  { text: "Top Entry Bal Valve", downloadURL: "" },
  { text: "Gate Valve", downloadURL: "" },
  { text: "Swing Check Valve", downloadURL: "" },
  { text: "Globe Valve", downloadURL: "" },
  { text: "Plug Valve", downloadURL: "" },
  { text: "Instrumental Valve", downloadURL: "" },
  { text: "Tube Fittings", downloadURL: "" },
  { text: "API 602 Forged Valve", downloadURL: "" },
];
const catalogueList = [
  { text: "Split Body Ball Valve", downloadURL: "" },
  { text: "Fully Welded Ball Valve", downloadURL: "" },
  { text: "Top Entry Bal Valve", downloadURL: "" },
  { text: "Gate Valve", downloadURL: "" },
  { text: "Swing Check Valve", downloadURL: "" },
  { text: "Globe Valve", downloadURL: "" },
  { text: "Plug Valve", downloadURL: "" },
  { text: "Instrumental Valve", downloadURL: "" },
  { text: "Tube Fittings", downloadURL: "" },
  { text: "API 602 Forged Valve", downloadURL: "" },
];
const quickSheetList = [
  { text: "Split Body Ball Valve", downloadURL: "" },
  { text: "Fully Welded Ball Valve", downloadURL: "" },
  { text: "Top Entry Bal Valve", downloadURL: "" },
  { text: "Gate Valve", downloadURL: "" },
  { text: "Swing Check Valve", downloadURL: "" },
  { text: "Globe Valve", downloadURL: "" },
  { text: "Plug Valve", downloadURL: "" },
  { text: "Instrumental Valve", downloadURL: "" },
  { text: "Tube Fittings", downloadURL: "" },
  { text: "API 602 Forged Valve", downloadURL: "" },
];
const certificateList = [
  { text: "ISO 15848-1", downloadURL: "" },
  { text: "6D-0714 2026", downloadURL: "" },
  { text: "F-273H1 H1", downloadURL: "" },
  { text: "PED CE 2014 68", downloadURL: "" },
  { text: "ISO 9001 2015", downloadURL: "" },
];

const ResourcePage = () => {
  return (
    <div className="container w-full flex flex-col  gap-[24px] items-center lg:items-start">
      <div className="flex flex-col gap-[28px] items-start">
        <SectionTitle title="User Manual" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[24px] gap-y-[28px] justify-start">
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
      <div className="flex flex-col gap-[28px] items-start">
        <SectionTitle title="Catalogue" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[24px] gap-y-[28px] justify-start">
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
      <div className="flex flex-col gap-[28px] items-start">
        <SectionTitle title="Quick Sheet" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[24px] gap-y-[28px] justify-start">
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
      <div className="flex flex-col gap-[28px] items-start">
        <SectionTitle title="Certification" isOneLine={true}></SectionTitle>
        <div className="w-full flex flex-row flex-wrap gap-x-[24px] gap-y-[28px] justify-start">
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
