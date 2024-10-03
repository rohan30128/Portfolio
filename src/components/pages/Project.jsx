import React ,{useState}from 'react'
import Sectiontitle from "../Sectiontitle";

export default function Project() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const Project = [
        {
            id : "1",
            title : "E-Commerce",
            technology : "Built using MERN stack (MongoDB, Express.js, React, Node.js) with additional technologies such as Context API, React Router and tailwind-CSS-react framework.",
            description : "This E-Commerce platform is built on the robust MERN stack, combining MongoDB, Express.js, React, and Node.js for a full-stack solution that handles everything from database management to server-side logic and user interface. Utilizing Context API for state management, the app offers a smooth and intuitive shopping experience, while React Router ensures seamless navigation between product pages and user accounts. With Tailwind CSS, the platform boasts a modern and responsive design, enhancing both aesthetics and usability.",
            link : "https://e-commerce-rohan-web.vercel.app"
        },
       
        {
            id : "2",
            title : "Weather-Forecasting",
            technology : "Built using React JS with additional technologies such as OpenWeatherMap API for weather data and React Hooks for state management",
            description : "This Weather Forecasting application is crafted using React, leveraging its powerful component-based architecture for a seamless user experience. By integrating the OpenWeatherMap API, the app provides real-time weather data, ensuring users stay informed about current conditions and forecasts. Utilizing React Hooks for state management, the application maintains a responsive and dynamic interface, allowing for efficient updates and interactions. Whether you’re planning your day or tracking weather patterns, this app delivers accurate and timely information right at your fingertips.",
            link : "https://weather-forecasting-web.vercel.app"
        },
        {
            id : "3",
            title : "Ai Chat Bot",
            technology : "Built using React JS with additional technologies such as Ai Studio open API for real-time communication and Context API for state management",
            description : "The AI Chat Bot is a sophisticated application built with React JS, designed to provide users with real-time conversational interactions. Leveraging the AI Studio Open API, the bot offers intelligent responses, enabling seamless communication and enhancing user engagement. With the implementation of Context API for state management, the application ensures smooth data flow and responsiveness, creating a fluid user experience. Ideal for customer support, FAQs, and interactive engagement, the AI Chat Bot combines advanced technology with a user-friendly interface.",
            link : "https://ai-chat-bot-jyus.onrender.com"
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
        <a href={Project[selectedItemIndex].link} target='_blank' className='text-cyan-400'>{Project[selectedItemIndex].link}</a>
      </div>
    </div>
  </div>
  )
}
