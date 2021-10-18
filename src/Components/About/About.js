import { RellaxWrapper } from 'react-rellax-wrapper'
import './about.scss'
// images
import me from '../../Images/me.jpg'
import aboutShape from '../../Images/aboutShape.png'



const About = () => {

    const content = [
        'Yo! My name is Jishnu and my favourite food is butter chicken. I love making android apps in Kotlin. In my free time, I play football or create music.',
        'When you want to try something new in life, you should do it without thinking too much, because I strongly believe that at the end of the day, it is night.'
    ]

    return (
        <section id='aboutme' className='aboutme_section'>
            <RellaxWrapper speed={-1.8} xs={1.8} mobile={1.8}>
                <div className='content_col'>
                    <h1 className='heading'>ABOUT ME</h1>
                    {content.map((i,k) => <p key={k} className='para'>{i}</p>)}
                </div>
            </RellaxWrapper>
            <div className='image_col'>
                <RellaxWrapper speed={2}>
                    <img className='img_shape img_shape_1' src={aboutShape} alt='about section shape' />
                </RellaxWrapper>
                <img className='img_main' src={me} alt='my pic' />
            </div>
        </section>
    )
} 




export default About