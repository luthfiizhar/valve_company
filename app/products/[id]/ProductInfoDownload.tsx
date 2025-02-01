import React from "react";
import { RxDownload } from "react-icons/rx";
import Link from "next/link";

interface ProductInfoDownloadProps {
  title: string;
  downloadURL: string;
}

const ProductInfoDownload = ({
  title,
  downloadURL,
}: ProductInfoDownloadProps) => {
  return (
    <div className="flex flex-row w-max gap-[16px] justify-center lg:max-w-[300px]">
      <span className="text-[16px] text-[#000000] font-semibold lg:text-[24px]">
        {title}
      </span>
      <Link href={downloadURL} target="_blank" download>
        <RxDownload size={24}></RxDownload>
      </Link>
    </div>
  );
};

export default ProductInfoDownload;
