import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import Vector from "../../public/Vector.svg";
import Squar from "../../public/Squar.svg";

const CustomTabs = () => {
  const [onSelected, setOnSelected] = useState("photos");
  const data = [
    {
      key: "About Me",
      title: "About Me",
      content:
        "I am a passionate software developer with a strong background in full-stack development, specializing in JavaScript and Python. My journey into technology started during college, where I majored in computer science and developed a deep interest in problem-solving and building innovative solutions. When I’m not coding, you can find me exploring new hiking trails or experimenting with creative cooking recipes. I enjoy learning about the latest tech trends and collaborating with diverse teams to bring ideas to life.",
    },
    {
      key: "Experiences",
      title: "Experiences",
      content:
        "Over the past five years, I have worked with multiple tech companies, ranging from startups to established enterprises. My roles have involved building responsive web applications, optimizing backend systems, and improving user experiences through data-driven solutions. I have successfully led teams on key projects, including developing a scalable e-commerce platform and a mobile application for real-time collaboration. I thrive in fast-paced environments and have gained proficiency in various tools like React, Node.js, and Docker. I also have experience working in agile environments, where I honed my project management and team leadership skills.",
    },
    {
      key: "Recommended",
      title: "Recommended",
      content:
        "I highly recommend collaborating with Sarah if you're looking for someone who not only brings technical expertise but also excellent communication and leadership skills. Her ability to turn complex challenges into actionable solutions has made a significant impact on our projects. Sarah is a detail-oriented and reliable professional, and her collaborative approach ensures that every team member contributes to success. Whether you need a skilled developer or a strategic thinker, Sarah is someone you can count on to deliver quality results consistently.",
    },
  ];
  return (
    <div className="flex w-full justify-center flex-col md:flex-row bg-[#363C43] mt-5 p-5 sm:pl-0 rounded-[18.89px] shadow-black drop-shadow-2xl">
      {/* Side Icons */}
      <span className="flex px-3 flex-row md:flex-col items-center md:h-36 justify-between">
        <div className="w-[25px] h-[25px] mb-4 md:mb-0">
          <img
            src={Vector}
            alt="Vector"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[35px] h-[35px]">
          <img
            src={Squar}
            alt="Square"
            className="w-full h-full object-contain"
          />
        </div>
      </span>

      {/* Tabs */}
      <div className="flex relative w-full flex-col mt-5 md:mt-0">
        <Tabs
          fullWidth
          onSelectionChange={(key) => setOnSelected(key)}
          classNames={{
            tab: "h-12 ",
            tabList: "bg-[#171717] p-2 rounded-3xl",
            cursor: "rounded-2xl",
            tabContent: "shadow-[1000px] !shadow-black",
          }}
          color="secondary"
          aria-label="Options"
        >
          {data.map((item) => (
            <Tab
              key={item.key}
              title={
                <div className="relative items-center w-full sm:w-[150px] lg:w-[190px] h-12 flex justify-center">
                  <span
                    className={
                      onSelected !== item.key
                        ? "absolute rounded-2xl inset-y-0 left-0 w-[0px] opacity-50 bg-gradient-to-r from-[#272728] to-[#96BEE7] transition-all group-hover:w-full"
                        : ""
                    }
                  ></span>
                  <div className="text-white text-base lg:text-lg z-10">
                    {item.title}
                  </div>
                </div>
              }
            >
              <Card className="bg-[#363C43] shadow-none rounded-none">
                <CardBody className="max-h-44 overflow-hidden">
                  <p className="text-[#969696] font-jakarta text-base lg:text-xl overflow-y-auto scrollbar-thumb-[#686e75] scrollbar scrollbar-w-[10px] scrollbar-h-10 scrollbar-thumb-rounded-full scrollbar-corner-slate-950">
                    {item.content}
                  </p>
                </CardBody>
              </Card>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default CustomTabs;
