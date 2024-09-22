import React from 'react'

export default function Sectiontitle({title,id}) {
  return (
    <div className='flex gap-10 items-center py-10 '  id={id}>
      <h1 className='text-3xl text-white ml-3' >{title}</h1>
      <div className='w-40 h-[2px] bg-tertiary'></div>
    </div>
  )
}
