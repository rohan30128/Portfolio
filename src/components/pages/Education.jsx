import React, { useState } from "react";
import Sectiontitle from "../Sectiontitle";

export default function Education() {
    const experience =  [
        {
            id : "1",
            institute : "DAVV Univercity, Indore",
            title: "Graduation",
            academic : "Bachelor of Computer Applications",
            period : "2021-2024",
            percentage : "7.50"
        }
        ,{
            id : "2",
            institute : "Central Academy School Umaria",
            title: "XII (CBSE)",
            academic : "XII (CBSE), Science",
            period : "2020-2021",
            percentage : "79.80%"
        },
        {
            id : "3",
            institute : "Central Academy School Umaria",
            title: "X (CBSE)",
            academic : "X (CBSE)",
            period : "2020-2021",
            percentage : "89.60%"
        }
    ];
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
                      ? "text-tertiary  border-tertiary border-l-4  -ml-[3px] bg-[#1a7f5a31] text-2xl sm:text-xl sm:py-3 sm:w-1/2"
                      : "text-white"
                  }`}
                >
                  {exper.title}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-8 sm:m-0 mx-10 w-5/6">
          <h1 className="text-secondary text-2xl ">
            {experience[selectedItemIndex].academic }
          </h1>
          <h1 className="text-tertiary text-2xl ">
            {experience[selectedItemIndex].institute}
          </h1>
          <p className="text-white text-xl ">CGPA : {experience[selectedItemIndex].percentage}</p>
        </div>
      </div>
    </div>
  );
}
