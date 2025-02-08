import React from "react";

interface ContactInfoComponentProps {
  text: string;
  icon: React.ReactNode;
}

const ContactInfoComponent = ({ text, icon }: ContactInfoComponentProps) => {
  return (
    <div className="flex flex-row gap-[8px] items-center  lg:w-auto lg:items-start">
      {icon}
      <span className="text-[16px] text-primary font-medium lg:max-w-[222px]">
        {text}
      </span>
    </div>
  );
};

export default ContactInfoComponent;
