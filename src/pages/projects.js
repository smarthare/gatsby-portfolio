import React from 'react'

import SEO from '../components/Utils/seo'
import Project from '../components/project'
import useProjects from '../hooks/useProjects'

const ProjectsPage = () => {
  const projects = useProjects()

  return (
    <>
      <SEO
        title="Projects"
        keywords={[`Benjamin Lannon`, `Portfolio`, `Web Developer`, `gatsby`]}
      />
      <h1>Projects</h1>
      <p>Here are a few larger scale projects I've created.</p>
      {projects.edges.map((projectObj, idx) => (
        <Project project={projectObj.node.data} idx={idx} key={idx} />
      ))}
    </>
  )
}

export default ProjectsPage
