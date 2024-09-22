import React from 'react'
import Sectiontitle from '../Sectiontitle';
import webanimation from "../../../public/webanimation.gif";

export default function About() {
  const skills = ["Javescript","React","Node","Express","MongoDB","SQL"]
  return (
    <div className='text-white'>
      <Sectiontitle title="About Me" id="about"/>
      <div className="flex md:gap-12   gap-28 flex-col md:flex-row w-full">
        <div className='h-[50vh] md:ml-3 md:w-1/3'>
        <img src={webanimation} alt=""  className='sm:w-full w-full rounded sm:h-full h-96' />
        </div>
        <div className='flex flex-col gap-12 w-5/6 md:ml-5 mx-auto text-justify'>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis facilis dolore at, optio voluptatem reiciendis error minima autem exercitationem, quis amet culpa voluptates molestiae fuga delectus enim eos quasi?</p>
          <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis facilis dolore at, optio voluptatem reiciendis error minima autem exercitationem, quis amet culpa voluptates molestiae fuga delectus enim eos quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quidem neque accusantium maiores sunt doloribus.</p>
        </div>
      </div>
      <div className='mt-8 py-5'>
        <h1 className='text-xl text-tertiary ml-3 '>Here are few technologies I'have been working with recently:</h1>
        <div className="flex flex-wrap gap-10 mt-10">
          {skills.map((skill,index)=>{
          return <div key={index} className='border border-tertiary py-3 px-10 text-center mx-auto w-36 rounded'>
            <h1 className='text-tertiary  mx-auto'>{skill}</h1>
          </div>
        })}
        </div>
      </div>
    </div>
  )
}
