import './App.css';
import DetailPage from './pages/DetailPage';
import { Reset } from 'styled-reset'
import { Fragment } from 'react';
import Title from './pages/Title';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IoMdRefresh } from "react-icons/io";
import About from './pages/About';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
        <Fragment>
          <Reset/>
            <Routes>
              <Route path='/' element={<Title/>}/>
              <Route path='about' element={<About IoMdRefresh={IoMdRefresh}/>}/>
              <Route path='/projectpage' element={<ProjectPage IoMdRefresh={IoMdRefresh}/>}/>
              <Route path='detailpage' element={<DetailPage/>}/>
            </Routes>
        </Fragment>   
  );
}

export default App;
