import { RellaxWrapper } from 'react-rellax-wrapper'

// styling
import './skills.scss'

// images
import shape4 from '../../Images/shape4.png'



const About = () => {

  const skillsContent = [
    {name:'Kotlin', level:'expert'},
    {name:'Android Studio', level:'advanced'},
    {name:'Git GitHub', level:'intermediate'},
    {name:'Firebase', level:'basic'}
  ]

  return (
    <section id='skills' className="skills_section">
      <RellaxWrapper speed={2}><img className='img_shape dimond_img_1' src={shape4} alt='skills section shape small' /></RellaxWrapper>
      <h1 className='heading'>SKILLS</h1>
      {skillsContent.map((i,k) => <div key={k} className={`bar ${i.level}`} data-skill={i.name}></div>)}
      <RellaxWrapper speed={2.2}><img className='img_shape dimond_img_2' src={shape4} alt='skills section shape big' /></RellaxWrapper>
    </section>
  )
}



export default About