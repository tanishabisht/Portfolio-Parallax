import { allProjects } from '../../Content/variable.js'
import { ProjectCardLeft, ProjectCardRight} from '../'
import './projects.scss'

const ProjectsSection = () => {
    return ( 
      <section id='project' className="project_section">
        <h1 className='heading'>PROJECTS</h1>

        {allProjects.map((project, projId) => (
          projId % 2 !== 0 ? 
          <ProjectCardLeft name={project.name} role={project.role} desc={project.desc} image={project.image} skillsArr={project.skillsArr} links={project.links} /> : 
          <ProjectCardRight name={project.name} role={project.role} desc={project.desc} image={project.image} skillsArr={project.skillsArr} links={project.links} />
        ))}

      </section>
    )
}

export default ProjectsSection