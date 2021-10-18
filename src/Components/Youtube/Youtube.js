import { RellaxWrapper } from 'react-rellax-wrapper'
import ReactPlayer from 'react-player'

// styling
import './youtube.scss'

// images
import shape3 from '../../Images/shape3.png'



const About = () => {
    return (
        <section id='youtube' className='youtube_section'>
          <RellaxWrapper speed={2.2}><img className='img_shape img_shape_2' src={shape3} alt='shape' /></RellaxWrapper>        
          <ReactPlayer className='video' light url="https://www.youtube.com/watch?v=vgU4cB26_BU" />
          <p className='para'>I share my knowledge on my YouTube Channel where I teach Android and Ktor</p>
        </section>
    )
}



export default About