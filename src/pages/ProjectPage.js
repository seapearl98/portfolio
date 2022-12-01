import React, { useEffect } from 'react'
import ProjectNav from './ProjectNav'
import Project01 from './Project01'
import Project02 from './Project02'
import Project03 from './Project03'
import Project04 from './Project04'
import '../styles/ProjectPage.scss'
import { useHorizontalScroll } from "../useSlideScroll.js";

function ProjectPage({IoMdRefresh}) {
  
  useEffect (()=>{
    let projects = document.querySelectorAll('div>ul.projects>li');
    console.log(projects);

    const projectNav = document.querySelectorAll(".navi");
    console.log(projectNav)

    const page = document.querySelector('ul.projects')
    console.log(page)


  for(let i=0;i<projectNav.length; i++){
    projectNav[i].addEventListener("click",e=>{
      e.preventDefault();
    for(let el of projectNav){
      el.classList.remove('on')
    };
    for(let el of projects){
      el.classList.remove('on')
    };
      projectNav[i].classList.add('on');
      projects[i].classList.add('on');
      console.log(i)
      page.style.transform = `translateX(${i} * -25%)`; //?
    })
  } 
})

const scrollRef = useHorizontalScroll();


  return (
    <div className='projectpage'>
        <ProjectNav IoMdRefresh={IoMdRefresh}/>
        <ul className='projects'>
          <li><Project01 className='project'/></li>
          <li><Project02 className='project'/></li>
          <li><Project03 className='project'/></li>
          <li><Project04 className='project'/></li>
        </ul>
    </div>
  )
}

export default ProjectPage