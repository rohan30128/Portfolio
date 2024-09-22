import React from "react";
import profile from "../../../public/profile.jpg";

export default function Intro() {
  return (
    <>
      <div  className="md:h-[80vh]  bg-primary flex md:flex-row flex-col space-y-5   mt-10">
        <div className=" w-full order-1 space-y-10  bg-primary">
          <div className="space-y-5 md:mt-0 mt-5">
            <h1 className="text-secondary text-xl ml-3">Hi, I am</h1>
            <h1 className="text-white text-5xl ml-3">Rohan Gupta</h1>
            <h1 className="text-tertiary text-5xl ml-3">
              I build things for the Web
            </h1>
          </div>

          <p className=" text-white md:w-10/12 mx-5 md:ml-3 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quisquam quia mollitia, possimus blanditiis repellat,
            ut veritatis, impedit dolor veniam quo optio facilis architecto nam.
            Amet sunt voluptates animi quod.
          </p>
          <button className="border border-tertiary text-tertiary rounded px-10 py-3 mx-5 md:mx-0">
            Get Started
          </button>
        </div>
        <div className=" bg-primary w-full md:order-2 md:max-w-96">
          <div className="avatar">
            <div className="rounded">
              <img src={profile} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
