import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
    <div className='flex flex-col items-center max-w-[1200px] gap-10'>
        <div className='flex flex-col items-center gap-3'>
            <p className='text-transparent bg-clip-text bg-title-gradient text-5xl font-medium'>Feature Projects</p>
            <p className='text-xl text-subtitle'>Here are a few past design projects i’ve worked on</p>
        </div>
        <div className='flex flex-wrap justify-center gap-5'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    </div>
  )
}

export default ProjectSection