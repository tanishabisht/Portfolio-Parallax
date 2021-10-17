// VIDEO PLAYER
import ReactPlayer from 'react-player'

// CSS STYLES
import './App.scss';

// IMPORT IMAGES
import me from './Images/me.jpg'
import shape1 from './Images/shape1.png'
import shape2 from './Images/shape2.png'
import shape3 from './Images/shape3.png'
import project1 from './Images/project1.png'
import project2 from './Images/project2.png'

// EMAIL
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

// PARALLAX
import { RellaxWrapper } from 'react-rellax-wrapper'

// TOASTIFY
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// CUSTOM COMPONENTS
import { Footer } from './Components'


function App() {


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [mssg, setMssg] = useState('')

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_806ruid', 'template_uw50gqm', form.current, 'user_lkwuhptAYqFFFhgOEij13')
      .then(
        () => toast.success('Email Sent Successfully!', {theme: "dark"}), 
        () => toast.error('Uh Oh! Some error occured', {theme: "dark"})
      )
    setName('')
    setEmail('')
    setNumber('')
    setMssg('')
  };


  return (
    <div className='bg'>


      {/* <div className='menu'>
        <div className='another'>
          <span className='item'>ABOUT</span>
          <span className='item'>UTUBE</span>
          <span className='item'>SKILLS</span>
          <span className='item'>PROJECTS</span>
          <span className='item'>GET IN TOUCH</span>          
        </div>
      </div> */}


      <section className="hero_section">
      <RellaxWrapper speed={-1.2}><h1>JISHNU GOYAL</h1></RellaxWrapper>
        <h2>ANDROID DEVELOPER</h2>
      </section>



      <section className='aboutme_section'>
        <RellaxWrapper speed={-2}>
          <div className='content_col'>
            <h1 className='heading'>ABOUT ME</h1>
            <p className='para'>Yo! My name is Jishnu and my favourite food is butter chicken. I love making android apps in Kotlin. In my free time, I play football or create music.</p>
            <p className='para'>When you want to try something new in life, you should do it without thinking too much, because I strongly believe that at the end of the day, it is night.</p>
          </div>
        </RellaxWrapper>
        <div className='image_col'>
          <RellaxWrapper speed={2}>
            <img className='img_shape img_shape_1' src={shape1} alt='shape' />
          </RellaxWrapper>
          <img className='img_main' src={me} alt='my pic' />
        </div>
      </section>



      <section className='youtube_section'>
        <RellaxWrapper speed={2.2}><img className='img_shape img_shape_2' src={shape3} alt='shape' /></RellaxWrapper>        
        <ReactPlayer className='video' light url="https://www.youtube.com/watch?v=vgU4cB26_BU" />
        <p className='para'>I share my knowledge on my YouTube Channel where I teach Android and Ktor</p>
      </section>



      <section className="skills_section">
        <h1 className='heading'>SKILLS</h1>
        <div className="bar expert" data-skill="Kotlin"></div>
        <div className="bar advanced" data-skill="Android Studio"></div>
        <div className="bar intermediate" data-skill="Git GitHub"></div>
        <div className="bar basic" data-skill="Firebase"></div>
        <div className="bar learning" data-skill="Firebase"></div>
      </section>



      <section className="project_section">
        <h1 className='heading'>PROJECTS</h1>

        <div className='row row_1'>
            <div className='desc_col'>
              <RellaxWrapper speed={-1}>
                <h2 className='proj_name'>UpTodd</h2>
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
            <img className='img_main' src={project2} alt='project 2' />
          </div>
          <div className='desc_col'>
            <RellaxWrapper speed={-1}>
              <h2 className='proj_name'>ASSIGNMENTS</h2>
              <h3 className='proj_designation'>Android Developer</h3>
              <p className='para'>Built an app using Firebase during the 2020 lockdown to help teachers and students to exchange assignments and solutions</p>
              <div className='stack_btns'>
                <button>KOTLIN</button>
                <a href='https://play.google.com/store/apps/details?id=my.app.assignments' target="_blank" rel="noreferrer"><button>VIEW ON PLAYSTORE</button></a>
              </div>
            </RellaxWrapper>
          </div>
        </div>
      </section>


      <section className='contact_section'>
        <RellaxWrapper speed={0.5} zIndex={-1}><img className='img_shape img_shape_4' src={shape2} alt='shape 3' /></RellaxWrapper>
        <div className='content_col'>
          <RellaxWrapper speed={0} zIndex={0}>
            <h1 className='heading'>GET IN TOUCH</h1>
            <p className='para'>Feel free to connect with me :)</p>
            <div className='social_icons'>
              <a href='https://github.com/JishnuGoyal' target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
              <a href='https://github.com/JishnuGoyal' target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href='https://www.instagram.com/jishnugoyal' target="_blank" rel="noreferrer"><i className="fab fa-instagram-square"></i></a>
              <a href='https://www.youtube.com/channel/UCT0y1HRWXI9kLpVoyblWtQA' target="_blank" rel="noreferrer"><i className="fab fab fa-youtube-square"></i></a>
            </div>
          </RellaxWrapper>
        </div>
        <div className='form_col'>
          <form onSubmit={sendEmail} ref={form}>
            <input name="name" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter your name" />
            <input name="email" value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Enter your email" />
            <input name="phone_number" value={number} onChange={e => setNumber(e.target.value)} type="text" placeholder="Enter your phone number" />
            <textarea name="message" value={mssg} onChange={e => setMssg(e.target.value)} rows="4" placeholder="Enter message"></textarea>
            <button type="submit" disabled={name==='' || email==='' || number==='' || mssg===''}>Submit</button>
          </form>
        </div>
        <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar/>
      </section>



      <Footer/>



    </div>
  );
}

export default App;
