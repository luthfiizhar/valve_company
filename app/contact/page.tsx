"use client";

import React from "react";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import ContactInfoComponent from "./ContactInfoComponent";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const infoList = [
  {
    icon: <HiOutlinePhone size={28}></HiOutlinePhone>,
    text: "+1234567890",
  },
  {
    icon: <HiOutlineMail size={28}></HiOutlineMail>,
    text: "stockofvalf@gmail.com",
  },
  { icon: <FaWhatsapp size={28}></FaWhatsapp>, text: "+0987654321" },
  {
    icon: <HiOutlineLocationMarker size={28}></HiOutlineLocationMarker>,
    text: "Çalı Mah. Çınarlık Cad. No: 8 16275 Bursa Turkiye",
  },
];

const ContactPage = () => {
  return (
    <div className="container w-full flex flex-col gap-[24px] items-start">
      <div className="hidden text-[#363940] font-semibold items-start w-full lg:block">
        <h1 className="text-[36px] text-start">Contact Us</h1>
      </div>
      <div className="w-full flex flex-col gap-[24px] items-center lg:flex-row lg:items-center lg:justify-between">
        <div className="text-[#363940] font-semibold items-start w-full lg:hidden">
          <h1 className="text-[36px] text-start">Contact Us</h1>
        </div>
        <div className="w-full flex flex-col gap-[24px] items-start lg:w-[440px] lg:order-2">
          <div className="items-center">
            <div className="w-[428px] h-[400px] bg-slate-500"></div>
          </div>
          <div className="flex flex-col gap-[24px] items-start w-full lg:flex-row lg:flex-wrap">
            {infoList.map((info, index) => {
              return (
                <ContactInfoComponent
                  key={index}
                  text={info.text}
                  children={info.icon}></ContactInfoComponent>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col w-full gap-[24px] items-center lg:w-[560px] lg:order-1">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Topic</SelectLabel>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="mobile">Mobile Development</SelectItem>
                <SelectItem value="solution">IT Solution</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            type="name"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <Textarea
            className="h-[200px]"
            id="message"
            name="message"
            placeholder="Description (Optional)"
          />
          <Button
            size="md"
            className="max-w-40 rounded-[24px] bg-black text-white uppercase">
            Send Request
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
