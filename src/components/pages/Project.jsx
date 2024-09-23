import React ,{useState}from 'react'
import Sectiontitle from "../Sectiontitle";

export default function Project() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const Project = [
        {
            id : "1234",
            title : "Book-Store",
            technology : "Built using MERN stack (MongoDB, Express.js, React, Node.js) with additional technologies such as Redux and React Router and tailwind-in-JS library .",
            description : "Book-Store is a full-stack e-commerce application that allows users to browse and purchase books online. The application features a user-friendly interface, search functionality, book categorization, and a secure payment gateway. Built using the MERN stack, Book-Store leverages the power of MongoDB for data storage, Express.js for server-side routing, and React for a seamless user experience.",
            link : "http://localhost:5173/"
        },
       
        {
            id : "1234",
            title : "Weather-Forecasting",
            technology : "Built using MERN stack (MongoDB, Express.js, React, Node.js) with additional technologies such as OpenWeatherMap API for weather data and React Hooks for state management",
            description : "Weather Forecasting is a real-time weather application that provides users with accurate and personalized weather information. The application features a user-friendly interface, real-time weather updates, location-based forecasting, and historical weather data. Built using the MERN stack, Weather Forecasting leverages the power of MongoDB for data storage, Express.js for server-side routing, and React for a responsive and interactive user interface.",
            link : "http://localhost:5173/"
        },
        {
            id : "1234",
            title : "Chat Box",
            technology : "Built using MERN stack (MongoDB, Express.js, React, Node.js) with additional technologies such as Socket.IO for real-time communication and Redux for state management",
            description : "Chat Box is a real-time messaging application that enables users to communicate with each other seamlessly. The application features a user-friendly interface, real-time messaging, user authentication, and authorization. Built using the MERN stack, Chat Box leverages the power of MongoDB for data storage, Express.js for server-side routing, and React for a responsive and interactive user interface.",
            link : "http://localhost:5173/"
        },
    ]
  return (
    <div>
    <Sectiontitle title="Project"id="project" />
    <div className="flex sm:flex-row flex-col sm:py-10 py-5 sm:gap-24 gap-10">
      <div className="flex flex-row sm:flex-col w-full sm:overflow-none overflow-auto  gap-10 border-l-2 my-auto border-tertiary sm:w-2/3">
        {Project.map((exper, index) => {
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
                {exper.title}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-3 sm:m-0 mx-10 w-5/6">
        <h1 className="text-secondary text-2xl ">
          {Project[selectedItemIndex].title}
        </h1>
        <h1 className="text-tertiary text-xl text-justify">
          {Project[selectedItemIndex].technology}
        </h1>
        <p className="text-white text-justify ">{Project[selectedItemIndex].description}</p>
        {/* <a href="" className='text-blue-500'>{Project[selectedItemIndex].link}</a> */}
      </div>
    </div>
  </div>
  )
}
