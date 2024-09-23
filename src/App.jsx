import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}> </Route>
    </Routes>
    <Toaster />
    </>
  )
}
