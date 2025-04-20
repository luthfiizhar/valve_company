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
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const infoList = [
  {
    icon: <HiOutlinePhone size={28}></HiOutlinePhone>,
    text: "+90 541 190 2903",
  },
  {
    icon: <HiOutlineMail size={28}></HiOutlineMail>,
    text: "stockofvalf@stockofvalf.com",
  },
  { icon: <FaWhatsapp size={28}></FaWhatsapp>, text: "+09 876 54 321" },
  {
    icon: <HiOutlineLocationMarker size={28}></HiOutlineLocationMarker>,
    text: "Kızılırmak Mah. 1450 Sok. No: 18, Köprülü Plaza, Kat No:6 Daire No: 23, Çankaya, Ankara, TÜRKİYE",
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  async function handleSubmit(event: any) {
    event.preventDefault();

    const formData = new FormData(event.target);


    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/send-email/backgroundtasks`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.status === 200) {
      toast({
        title: "Thank You",
        description: "Your message has been sent.",
      });
      formRef.current!.reset();
    }
    else {
      toast({
        title: "Error",
        description: data["message"],
      });
    }
  }
  return (
    <div className="container w-full flex flex-col gap-[24px] items-start">
      <div className="hidden text-[#363940] font-semibold items-start w-full lg:block">
        <h1 className="text-[36px] text-start">Contact Us</h1>
      </div>
      <div className="w-full flex flex-col gap-[24px] items-center lg:flex-row lg:items-center lg:justify-between">
        <div className="text-[#363940] font-semibold items-start w-full lg:hidden">
          <h1 className="text-[36px] text-start">Contact Us</h1>
        </div>
        <div className="w-full flex flex-col gap-[24px] items-start lg:w-[480px] lg:order-2">
          <div className="w-full lg:w-[428px] h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6121.366099970035!2d32.812793!3d39.903728!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU0JzEzLjQiTiAzMsKwNDgnNDYuMSJF!5e0!3m2!1sen!2sid!4v1745120138035!5m2!1sen!2sid"
              loading="lazy"
              style={{ border: 0 }}
              className="object-contain w-full lg:w-[428px] h-[400px]"></iframe>
          </div>
          <div className="flex flex-col gap-[24px] items-start w-full lg:grid lg:grid-cols-2 lg:gap-x-[0px]">
            {infoList.map((info, index) => {
              return (
                <ContactInfoComponent
                  key={index}
                  text={info.text}
                  icon={info.icon}></ContactInfoComponent>
              );
            })}
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-[24px] items-center lg:w-[560px] lg:order-1">
          {/* <Select>
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
          </Select> */}
          <Input
            type="text"
            id="topic"
            name="topic"
            placeholder="Subject"
          // required
          />
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
            type="submit"
            size="md"
            className="max-w-40 rounded-[24px] bg-black text-white uppercase">
            Send Request
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;


