import { RellaxWrapper } from 'react-rellax-wrapper'

// styling
import './projects.scss'

// images
import project1 from '../../Images/project1.png'
import project2 from '../../Images/project2.png'



const About = () => {
    return ( 
      <section id='project' className="project_section">
        <h1 className='heading'>PROJECTS</h1>

        <div className='row row_1'>
            <div className='desc_col'>
              <RellaxWrapper speed={-0.5} tablet={0.3} mobile={0.3} xs={0.3} >
                <RellaxWrapper speed={-0.2}><h2 className='proj_name proj_name_1'>UpTodd</h2></RellaxWrapper>
                <h3 className='proj_designation'>Android Developer</h3>
                <p className='para'>Built an app for the company which required critical skills such as WorkManager, Kotlin Coroutines, Room and Dependency Injection</p>
                <div className='stack_btns'>
                  <button>KOTLIN</button>
                  <a href='https://play.google.com/store/apps/details?id=com.uptodd.uptoddapp' target="_blank" rel="noreferrer"><button>VIEW ON PLAYSTORE</button></a>
                </div>
              </RellaxWrapper>
            </div>
          <div className='img_col'>
            <img className='img_main' src={project1} alt='project 1' />
          </div>
        </div>

        <div className='row row_2'>
          <div className='img_col'>
            <img className='img_main' src={project2} alt='project 1' />
          </div>
          <div className='desc_col'>
            <RellaxWrapper speed={-0.8} tablet={0.2} mobile={0.2} xs={0.2}>
              <RellaxWrapper speed={-0.2}><h2 className='proj_name proj_name_2'>Assignment</h2></RellaxWrapper>
              <h3 className='proj_designation'>Android Developer</h3>
              <p className='para'>Built an app using Firebase during the 2020 lockdown to help teachers and students to exchange assignments and solutions</p>
              <div className='stack_btns'>
                <button>KOTLIN</button>
                <a href='https://play.google.com/store/apps/details?id=com.uptodd.uptoddapp' target="_blank" rel="noreferrer"><button>VIEW ON PLAYSTORE</button></a>
              </div>
            </RellaxWrapper>
          </div>
        </div>
      </section>
    )
}



export default About