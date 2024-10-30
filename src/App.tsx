import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Typeahead from "./components/Typeahead/Typeahead";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <SearchPage/>
    </div>
  )
}

export default App
