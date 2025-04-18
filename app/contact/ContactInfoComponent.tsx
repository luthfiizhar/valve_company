import React from "react";

interface ContactInfoComponentProps {
  text: string;
  icon: React.ReactNode;
}

const ContactInfoComponent = ({ text, icon }: ContactInfoComponentProps) => {
  return (
    <div className="flex flex-row gap-[8px] w-full items-center lg:w-auto lg:items-start">
      <div>
        {icon}
      </div>
      <span className="text-[16px] text-primary font-medium lg:w-auto">
        {text}
      </span>
    </div>
  );
};

export default ContactInfoComponent;
