import { RellaxWrapper } from 'react-rellax-wrapper'

// styling
import './skills.scss'

// images
import shape4 from '../../Images/shape4.png'



const About = () => {
    return (
      <section id='skills' className="skills_section">
        <RellaxWrapper speed={2}><img className='img_shape dimond_img_1' src={shape4} alt='shape 1 dimond' /></RellaxWrapper>
        <h1 className='heading'>SKILLS</h1>
        <div className="bar expert" data-skill="Kotlin"></div>
        <div className="bar advanced" data-skill="Android Studio"></div>
        <div className="bar intermediate" data-skill="Git GitHub"></div>
        <div className="bar basic" data-skill="Firebase"></div>
        <div className="bar learning" data-skill="Firebase"></div>
        <RellaxWrapper speed={2}><img className='img_shape dimond_img_2' src={shape4} alt='shape 1 dimond' /></RellaxWrapper>
      </section>
    )
}



export default About