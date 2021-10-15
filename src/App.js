import ReactPlayer from 'react-player'
import './App.scss';
import me from './Images/me.jpg'
import shape1 from './Images/shape1.png'
import shape2 from './Images/shape2.png'
import shape3 from './Images/shape3.png'
import shape4 from './Images/shape4.png'
import shape5 from './Images/shape5.png'
import project1 from './Images/project1.png'
import project2 from './Images/project2.png'

import { RellaxWrapper } from 'react-rellax-wrapper'


function App() {
  return (
    <>

      <section className="hero_section">
        <h1>JISHNU GOYAL</h1>
        <h2>ANDROID DEVELOPER</h2>
      </section>



      <section className='aboutme_section'>
        <RellaxWrapper speed={-2}>
          <div className='content_col'>
            <h1 className='heading'>ABOUT ME</h1>
            <p className='para'>Hi, my name is Glenn Catteeuw, a multidisciplinary designer & art director based in Belgium. With a passion for well-crafted (digital) experiences, I believe in beauty to empower ideas.</p>
            <p className='para'>Hi, my name is Glenn Catteeuw, a multidisciplinary designer & art director based in Belgium. With a passion for well-crafted (digital) experiences, I believe in beauty to empower ideas.</p>
          </div>
        </RellaxWrapper>
        <div className='image_col'>
          <RellaxWrapper speed={2}>
            <img className='img_shape' src={shape1} alt='shape' />
          </RellaxWrapper>
          <img className='img_main' src={me} alt='my pic' />
        </div>
      </section>



      <section className='youtube_section'>
        <RellaxWrapper speed={2.2}><img className='img_shape' src={shape2} alt='shape' /></RellaxWrapper>        
        <ReactPlayer className='video' light url="https://youtu.be/7kh3Pog6pyw" />
        <p className='para'>With a passion for well-crafte n Catteeuw, a multidisciplinary designer  n Catteeuw, a multidisciplinary designer & art director based in Belgium. With a passion for well-crafted (digital) experi</p>
      </section>



      <section class="skills_section">
        <h1 className='heading'>SKILLS</h1>
        <div class="bar back learning" data-skill="Kotlin"></div>
        <div class="bar mid basic" data-skill="Android Studio"></div>
        <div class="bar mid intermediate" data-skill="Git GitHub"></div>
        <div class="bar front advanced" data-skill="CSS3"></div>
        <div class="bar front expert" data-skill="HTML5"></div>
      </section>



      <section className="project_section">
        <h1 className='heading'>PROJECTS</h1>

        <div className='row row_1'>
            <div className='desc_col'>
              <RellaxWrapper speed={-1}>
                <h2>PROJECT NAME</h2>
                <h3>Android Developer</h3>
                <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molesti</p>
                <div className='stack_btns'>
                  <button>KOTLIN</button>
                  <button>KOTLIN</button>
                </div>
              </RellaxWrapper>
            </div>
          <div className='img_col'>
            <RellaxWrapper zIndex={-1} speed={-2}><img className='img_shape' src={shape5} alt='shape 3' /></RellaxWrapper>
            <RellaxWrapper zIndex={0} speed={0}><img className='img_main' src={project1} alt='project 1' /></RellaxWrapper>
          </div>
        </div>

        <div className='row row_2'>
          <div className='img_col'>
            <img className='img_main' src={project2} alt='project 2' />
          </div>
          <div className='desc_col'>
            <RellaxWrapper speed={-1}>
              <h2>PROJECT NAME</h2>
              <h3>Android Developer</h3>
              <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molesti</p>
              <div className='stack_btns'>
                <button>KOTLIN</button>
                <button>KOTLIN</button>
              </div>
            </RellaxWrapper>
          </div>
        </div>
      </section>



      <section className='contact_section'>
        <RellaxWrapper speed={0.5} zIndex={-1}><img className='img_shape' src={shape4} alt='shape 3' /></RellaxWrapper>
        <div className='content_col'>
          <RellaxWrapper speed={0} zIndex={0}>
            <h1 className='heading'>GET IN TOUCH</h1>
            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molesti</p>
            <div className='social_icons'>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-youtube-square"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-github-square"></i>
            </div>
          </RellaxWrapper>
        </div>
        <div className='form_col'>
          <input type="text" id="name" placeholder="Enter your name" />
          <input type="text" id="email" placeholder="Enter your email" />
          <input type="text" id="phone" placeholder="Enter your phone number" />
          <textarea id="mssg" rows="4" placeholder="Enter message"></textarea>
        </div>
      </section>



      <footer>
        <p>Inspired by This Repo</p>
      </footer>



    </>
  );
}

export default App;
