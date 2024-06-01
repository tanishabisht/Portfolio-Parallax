import { RellaxWrapper } from 'react-rellax-wrapper'
import { bioContent, bioImage } from '../../Content/variable'
import aboutShape from '../../Images/aboutShape.png'
import './about.scss'

const AboutSection = () => {
    return (
        <section id='aboutme' className='aboutme_section'>
            <RellaxWrapper speed={-1.8} xs={1.8} mobile={1.8}>
                <div className='content_col'>
                    <h1 className='heading'>ABOUT ME</h1>
                    {bioContent.map((i,k) => <p key={k} className='para'>{i}</p>)}
                </div>
            </RellaxWrapper>
            <div className='image_col'>
                <RellaxWrapper speed={2}>
                    <img className='img_shape img_shape_1' src={aboutShape} alt='about section shape' />
                </RellaxWrapper>
                <img className='img_main' src={bioImage} alt='my pic' />
            </div>
        </section>
    )
} 

export default AboutSection