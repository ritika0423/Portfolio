import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BrandIdentity from './Pages/Brandidentity';
import CaseStudy from './Pages/Casestudy';
import Experience from './Pages/Experience';
import PassionProject from './Pages/Passionproject';
import Posters from './Pages/Posters';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const Main = ()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/brand" element={<BrandIdentity/>} />
            <Route path='/case' element={<CaseStudy/>}/>
            <Route path='/experience' element={<Experience/>} />
            <Route path='/passion' element={<PassionProject/>} />
            <Route path='/posters' element={<Posters/>} />
        </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
