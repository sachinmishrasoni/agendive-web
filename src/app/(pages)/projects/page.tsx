"use client";
import ProjectCard from '@/components/ui/ProjectCard';
import React from 'react'

const ProjectsPage = () => {
    return (
        <main className='projects-page'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                    Array(15).fill(0).map((_, index) => (
                        <ProjectCard key={index} />
                    ))
                }
                
            </div>
        </main>
    )
}

export default ProjectsPage