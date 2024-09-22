import React, { useState } from "react";
import Sectiontitle from "../Sectiontitle";
import { experience } from "../../../resource/experienceses";

export default function Experience() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <Sectiontitle title="Education" id="education"/>
      <div className="flex sm:flex-row flex-col sm:py-10 py-5 sm:gap-24 gap-10">
        <div className="flex flex-row sm:flex-col w-full sm:overflow-none overflow-auto  gap-10 border-l-2 my-auto border-tertiary sm:w-2/3">
          {experience.map((exper, index) => {
            return (
              <div
                key={index}
                onClick={() => setSelectedItemIndex(index)}
                className="cursor-pointer "
              >
                <h1
                  className={`text-xl sm:px-10  ${
                    selectedItemIndex === index
                      ? "text-tertiary  border-tertiary border-l-4  -ml-[3px] bg-[#1a7f5a31] text-2xl sm:text-xl py-3 sm:w-1/2"
                      : "text-white"
                  }`}
                >
                  {exper.period}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 sm:m-0 mx-10 w-5/6">
          <h1 className="text-secondary text-xl ">
            {experience[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl ">
            {experience[selectedItemIndex].company}
          </h1>
          <p className="text-white text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, repellat! Facere dignissimos quas adipisci qui quo minus molestias autem omnis, quos, eaque asperiores nemo. Officiis fuga iure vero quo quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ducimus sit quasi optio in, quod deserunt distinctio eveniet aliquam maxime aperiam sequi et libero quo enim cupiditate. Quisquam, totam soluta!</p>
        </div>
      </div>
    </div>
  );
}
