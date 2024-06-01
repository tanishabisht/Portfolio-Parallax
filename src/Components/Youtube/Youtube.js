import { RellaxWrapper } from 'react-rellax-wrapper'
import { youTubeContent, youTubeLink } from '../../Content/variable'
import ReactPlayer from 'react-player'
import shape3 from '../../Images/shape3.png'
import './youtube.scss'

const YouTubeSection = () => {
    return (
        <section id='youtube' className='youtube_section'>
          <RellaxWrapper speed={2.2}><img className='img_shape img_shape_2' src={shape3} alt='shape' /></RellaxWrapper>        
          <ReactPlayer className='video' light url={youTubeLink} />
          <p className='para'>{youTubeContent}</p>
        </section>
    )
}

export default YouTubeSection