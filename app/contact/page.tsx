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
// import { FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
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
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  async function handleSubmit(event: any) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("/api/mail", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data["status"] === 200) {
      toast({
        title: "Thank You",
        description: "Your message has been sent.",
      });
      formRef.current!.reset();
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
        <div className="w-full flex flex-col gap-[24px] items-start lg:w-[440px] lg:order-2">
          <div className="items-center">
            <div className="w-[428px] h-[400px] bg-slate-500">
              <div className="w-full h-full object-contain">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2231345198907!2d28.919855525515715!3d40.181847419902425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca15d8a562c521%3A0x218a8ccffb84c83d!2sKURVALF%20MAKINA%20LTD%20STI!5e0!3m2!1sen!2str!4v1736786385709!5m2!1sen!2str"
                  width="600"
                  height="450"
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                  className="object-contain w-[428px] h-[400px]"></iframe>
              </div>
            </div>
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
