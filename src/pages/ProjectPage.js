import React, { useEffect } from 'react'
import ProjectNav from './ProjectNav'
import Project01 from './Project01'
import Project02 from './Project02'
import Project03 from './Project03'
import Project04 from './Project04'
import '../styles/ProjectPage.scss'

function ProjectPage({IoMdRefresh}) {

  

  return (
    <div className='projectpage'>
        <ProjectNav IoMdRefresh={IoMdRefresh}/>
        <div className='projects'>
          <Project01 className='project'/>
          <Project02 className='project'/>
          <Project03 className='project'/>
          <Project04 className='project'/>
        </div>
    </div>
  )
}

export default ProjectPage