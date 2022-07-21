import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Hours from './pages/Hours';
import Login from './pages/Form';
import Contact from './pages/Contact';
import KommunicateChat from './chat';
import React, { useState } from "react";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  return (<div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path= "/courses" element={ <Courses />} />
        <Route path= "/hours" element={ <Hours />} />
        <Route path= "/login" element={<Login />} />
        <Route path= "/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    <KommunicateChat />
  </div>);
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
