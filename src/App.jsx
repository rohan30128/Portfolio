import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home.jsx'

export default function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />}> </Route>
    </Routes>
    </>
  )
}
