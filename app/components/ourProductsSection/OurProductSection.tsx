"use client";
import React from "react";
import SectionTitle from "../SectionTitle";
import ProductComponent from "./ProductComponent";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const products = [
  {
    title: "Split Body Ball Valve",
    desc: "Flanged valves are preferred beacause they can be easily disassembled due to operating conditions in the systems whre they are used. They are mostly used in application that require easy and fast maintenance.\n\nWith the trunnion design, they are preferred due to their high sealing performance at low pressures and their easy on-off properties in high pressure applications",
    imageUrl: "",
  },
  {
    title: "Full Welded Ball Valve",
    desc: "Fully Welded Ball valves are used in pipelines on welded jointed spools due to their strong structure and low maintenance needs. They are generally preferred in underground and above ground applications. Their design provides a lightweight structure and optimum level sealing.",
    imageUrl: "",
  },
  {
    title: "Top Entry Ball Valve",
    desc: "When you need to decrease down time of critical service pipeline you should select top entry design ball valves for in line maintenance and quick repair-ability. It allows to remove ball and seats easily at site without disassembly whole vale for maintenance or repairing purpose.",
    imageUrl: "",
  },
  {
    title: "Gate Valve",
    desc: "Valve used to control the flow of liquids and gases in pipelines, operating by raising or lowering a gate to either fully allow or completely block the flow. It is ideal for on/off applications, providing minimal resistance when fully open and a tight seal when closed. Typically made from durable materials like cast iron, steel, or brass, gate valves are common in industries such as water treatment, oil and gas, and power stations.",
    imageUrl: "",
  },
  {
    title: "Swing Check Valve",
    desc: "One-way valve used to prevent backflow in pipelines. It operates by using a hinged disc or flap that swings open to allow flow in one direction and closes automatically when the flow reverses, preventing reverse flow. The valve's design ensures that it only permits fluid to pass in the desired direction, protecting equipment and systems from damage caused by backflow. Swing check valves are typically used in horizontal or vertical pipelines and are commonly found in water, oil, and gas systems. ",
    imageUrl: "",
  },
  {
    title: "Globe Valve",
    desc: "Valve used to regulate the flow of liquids or gases in a pipeline. It features a spherical body with an internal baffle that directs the flow through a seat and a movable plug or disc. The valve operates by raising or lowering the plug to control the flow rate, making it ideal for applications requiring precise flow regulation. Globe valves are commonly used in systems where throttling is necessary, such as in water treatment, HVAC systems, and chemical processing. While they provide excellent flow control, they can create higher resistance to flow compared to other valve types, leading to potential pressure drops",
    imageUrl: "",
  },
  {
    title: "Plug Valve",
    desc: "Valve used to control the flow of liquids or gases in a pipeline. It consists of a cylindrical or tapered plug with a hole or ports that align with the pipeline when the valve is open. By rotating the plug, the flow path is either opened or closed. Plug valves are known for their simple design, quick operation, and ability to handle a wide range of fluids, including slurries, gases, and viscous liquids. They are commonly used in applications requiring frequent on/off operation, such as in chemical processing, water treatment, and oil and gas industries.",
    imageUrl: "",
  },
  {
    title: "Instrumental Valve",
    desc: "Valve used in automated control systems to regulate fluid flow based on signals from instruments or sensors. Common in industries like oil and gas or chemical processing, these valves respond to feedback from control systems to ensure precise flow regulation. They can be operated pneumatically, electrically, or hydraulically, providing accuracy and reliability in process control",
    imageUrl: "",
  },
  {
    title: "Tube Fittings",
    desc: "Components used to connect, secure, and seal tubing in various piping systems. They come in a wide range of styles, such as compression, push-to-connect, and flare fittings, and are designed to join tubes or pipes securely without leaks. Tube fittings are commonly used in industries like oil and gas, pharmaceuticals, and HVAC systems, where precise fluid or gas flow control is essential. Made from materials like brass, stainless steel, or plastic, they ensure reliable connections, easy installation, and can handle high-pressure or corrosive environments",
    imageUrl: "",
  },
  {
    title: "API 602 Forged Valve",
    desc: "High-performance valves designed to meet the specifications of the American Petroleum Institute (API) 602 standard. These valves are forged, meaning they are made by shaping metal under high pressure, resulting in strong, durable components. Primarily used in the oil and gas industry, API 602 forged valves are known for their ability to withstand high pressures and temperatures. These valves are available in various types, including gate, globe, and ball valves, and are highly resistant to corrosion and wear.",
    imageUrl: "",
  },
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const OurProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="pt-[36px]">
      <div className="container w-full flex flex-col gap-[64px] items-center lg:items-start">
        <div className="py-[10px] lg:py-0">
          <SectionTitle title="Our Product" isOneLine={false}></SectionTitle>
        </div>
        <ul ref={ref} className="flex flex-col gap-[32px] w-screen lg:w-full">
          {products.map((item, index) => {
            return (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}>
                <ProductComponent
                  id={index + 1}
                  title={item.title}
                  desc={item.desc}
                  imageUrl={item.imageUrl}></ProductComponent>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OurProductSection;
