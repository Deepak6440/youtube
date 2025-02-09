import { useState } from 'react'
import { AppContext } from './context/contextApi'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './component/Header'
import Feed from './component/Feed'
import SearchResult from './component/SearchResult'
import VideoDetails from './component/VideoDetails'

function App() {

  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header/>
          <Routes>
            <Route path='/' element={<Feed/>}/>
            <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>
            <Route path='/video/:id' element={<VideoDetails/>}/>
          </Routes>
        </div>

      </BrowserRouter>
    </AppContext>
  )
}

export default App
