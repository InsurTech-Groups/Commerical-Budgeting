import React, {Fragment} from 'react'
import { Routes, Route } from "react-router-dom";

import { NavBar } from './components/NavBar'
import MainPage from './pages/MainPage'
import Sources from './pages/Sources';

const App = () => {
  return (

    <div className='bg-dark-purple'>
    <div class="min-h-screen flex">
    <div class="flex-wrap bg-red">
      <NavBar />
    </div>
  
    <main class="flex-1 min-w-0 overflow-auto bg-blue">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/sources" element={<Sources />} />
            </Routes>
    </main>
      </div>
      </div>
  )
}

export default App