"use client";
import Skeleton from "react-loading-skeleton";
import ResourcesComponent from "./ResourcesComponent";
import { useState, useEffect, PropsWithChildren } from "react";

interface CertificateProps {
  id: string;
  filename: string;
  thumbnailImage: string;
  path: string;
}

function Box({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="rounded-lg block pb-10 h-40 lg:h-96 w-full">{children}</div>
  );
}

const CertificateComponent = () => {
  const [data, setData] = useState<CertificateProps[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/certificate/`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="container w-full ">
        <div className="">
          <Skeleton
            className="h-full rounded-lg"
            wrapper={Box}
            count={3}></Skeleton>
        </div>
      </div>
    );
  }
  if (!data) return <p>No Certificate data</p>;

  const certificate: CertificateProps[] = data;

  return (
    <div className="w-full flex flex-row flex-wrap gap-x-[8px] gap-y-[28px] justify-start  lg:justify-start lg:gap-x-[48px]">
      {certificate.map((item, index) => {
        return (
          <ResourcesComponent
            key={index}
            text={item.filename}
            downloadURL={item.path ?? "-"}
            coverURL={item.thumbnailImage}></ResourcesComponent>
        );
      })}
    </div>
  );
};

export default CertificateComponent;
