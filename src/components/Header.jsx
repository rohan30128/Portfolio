import React from 'react'
import profile from "../../public/profile.jpg"

export default function Header() {
  return (
    <>
    <div className="navbar bg-primary text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a href='/'>Intro</a></li>
        <li><a href='#about'>About</a></li>
      <li><a href='#education'>Education</a></li>
      <li><a href='#project'>Project</a></li>
      <li><a href='#contact'>Contact Us</a></li>

      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Rohan Gupta</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a href='/'>Intro</a></li>
        <li><a href='#about'>About</a></li>
      <li><a href='#education'>Education</a></li>
      <li><a href='#project'>Project</a></li>
      <li><a href='#contact'>Contact Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="avatar">
  <div className="w-12 rounded-full">
    <img src={profile} />
  </div>
</div>
  </div>
</div>

    </>
  )
}
