import ReactPlayer from 'react-player'
import './App.css';
import me from './Images/me.jpg'
import shape1 from './Images/shape1.png'
import shape2 from './Images/shape2.png'
import project1 from './Images/project1.png'
import project2 from './Images/project3.jpg'

function App() {
  return (
    <div className="bg">



      <section className="hero_section">
        <h1>JISHNU GOYAL</h1>
        <h2>ANDROID DEVELOPER</h2>
      </section>



      <section className='aboutme_section'>
        <div className='content'>
          <h1>ABOUT ME</h1>
          <p>Hi, my name is Glenn Catteeuw, a multidisciplinary designer & art director based in Belgium. With a passion for well-crafted (digital) experiences, I believe in beauty to empower ideas.</p>
        </div>
        <div className='image'>
          <img className='shape1_img' src={shape1} alt='my pic shape' />
          <img className='me_img' src={me} alt='my pic' />
        </div>
      </section>



      <section className='youtube_section'>
        <img className='shape2_img' src={shape2} alt='my pic shape' />
        <ReactPlayer className='video' light url="https://youtu.be/7kh3Pog6pyw" />
        <p className='content'>With a passion for well-crafte n Catteeuw, a multidisciplinary designer  n Catteeuw, a multidisciplinary designer & art director based in Belgium. With a passion for well-crafted (digital) experi</p>
      </section>



      <section class="skills_section">
        <h1>SKILLS</h1>
        <div class="bar back learning" data-skill="Kotlin"></div>
        <div class="bar mid basic" data-skill="Android Studio"></div>
        <div class="bar mid intermediate" data-skill="Git GitHub"></div>
        <div class="bar front advanced" data-skill="CSS3"></div>
        <div class="bar front expert" data-skill="HTML5"></div>
      </section>



      <section className="project_section">
        <h1>PROJECTS</h1>

        <div className='project'>
          <div className='project_desc'>
            <h2>PROJECT NAME</h2>
            <h3>Android Developer</h3>
            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molesti</p>
            <div className='stack_btn'>
              <button>KOTLIN</button>
              <button>KOTLIN</button>
            </div>
          </div>
          <div className='project_img'>
            <img src={project2} alt='project 1' />
          </div>
        </div>

        <div className='project_two'>
          <div className='project_img'>
            <img src={project1} alt='project 1' />
          </div>
          <div className='project_desc'>
            <h2>PROJECT NAME</h2>
            <h3>Android Developer</h3>
            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molesti</p>
            <div className='stack_btn'>
              <button>KOTLIN</button>
              <button>KOTLIN</button>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}

export default App;
