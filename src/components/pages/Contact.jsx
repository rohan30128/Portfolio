import React from "react";
import Sectiontitle from "../Sectiontitle";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit =async (data) => {
    const userInfo = {
      name : data.name,
      email : data.email,
      number : data.number,
      subject : data.subject,
      message : data.message
    };
    axios.post("https://portfolio-backend-8pii.onrender.com/contact",userInfo).then((res)=>{
      const message = JSON.stringify(res.data.message)
      toast.success(message);
      reset();
    }).catch((err)=>{console.log(err)});
  };

  return (
    <div>
      <Sectiontitle title="Say Hello" id="contact" />
      <div className="sm:w-1/2 w-80 mx-auto">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-5">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input {...register("name", { required: true })} type="text" className="grow" placeholder="Full Name" />
              {errors.name && <span>This field is required</span>}
            </label>
          </div>
          <div className="my-5">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input {...register("email", { required: true })} type="text" className="grow" placeholder="Email" />
              {errors.email && <span>This field is required</span>}
            </label>
          </div>
          <div className="my-5">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input {...register("number", { required: true })} type="text" className="grow" placeholder="Phone Number" />
              {errors.number && <span>This field is required</span>}
            </label>
          </div>
          <div className="my-5">
            <label className="input input-bordered flex items-center gap-2">
            <input
            {...register("subject", { required: true })}
              type="text"
              placeholder="Subject"
              className="input border-none  w-full "
            />
            {errors.subject && <span>This field is required</span>}
            </label>
          </div>
          <div className="my-5">
            <textarea
              placeholder="Message"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div>
          <div>
            
            <input type="submit" className="btn btn-accent" />
          </div>
        </form>
      </div>
    </div>
  );
}
