import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App =()=> {
  const apiKey=process.env.REACT_APP_NEWS_API
  const[progress,setProgress] = useState(0)
  
  
    return (
      <>
      <Router>
      
      <Navbar></Navbar>
      <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
      
      <Routes>
        <Route exact path="/"  element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={5} category="general"  />} />
        <Route exact path="/business"  element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={5} category="business" />} />
        <Route exact path="/entertainment"  element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={5} category="entertainment"  />} />
        <Route exact path="/general"  element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={5} category="general"  />} />
        <Route exact path="/health"  element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={5} category="health" />} />
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science"  pageSize={5} category="science" />} />
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={5} category="sports" />} />
        <Route exact path="/technology"  element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={5} category="technology" />} />



        
      </Routes>
      </Router>
      </>
    )
  
}
export default App
