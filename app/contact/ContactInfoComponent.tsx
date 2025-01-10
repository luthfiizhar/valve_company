import React from "react";
import { IconType } from "react-icons";

interface ContactInfoComponentProps {
  text: string;
  children: React.ReactNode;
}

const ContactInfoComponent = ({
  text,
  children,
}: ContactInfoComponentProps) => {
  return (
    <div className="flex flex-row gap-[8px] items-center  lg:w-auto lg:items-start">
      {children}
      <span className="text-[16px] text-primary font-medium lg:max-w-[222px]">
        {text}
      </span>
    </div>
  );
};

export default ContactInfoComponent;
