// VIDEO PLAYER
import ReactPlayer from 'react-player'

// CSS STYLES
import './App.scss';

// IMPORT IMAGES
import me from './Images/me.jpg'
import shape1 from './Images/shape1.png'
import shape2 from './Images/shape2.png'
import shape4 from './Images/shape4.png'
import shape5 from './Images/shape5.png'
import shape6 from './Images/shape6.png'
import shape7 from './Images/shape7.png'
import project1 from './Images/project1.png'
import project2 from './Images/project2.png'

// EMAIL
import { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

// PARALLAX
import { RellaxWrapper } from 'react-rellax-wrapper'

// TOASTIFY
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            <img className='img_shape img_shape_1' src={shape1} alt='shape' />
          </RellaxWrapper>
          <img className='img_main' src={me} alt='my pic' />
        </div>
      </section>



      <section className='youtube_section'>
        <RellaxWrapper speed={2.2}><img className='img_shape img_shape_2' src={shape6} alt='shape' /></RellaxWrapper>        
        <ReactPlayer className='video' light url="https://youtu.be/7kh3Pog6pyw" />
        <p className='para'>With a passion for well-crafte n Catteeuw, a multidisciplinary designer  n Catteeuw, a multidisciplinary designer & art director based in Belgium. With a passion for well-crafted (digital) experi</p>
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
            {/* <RellaxWrapper zIndex={-1} speed={-2}><img className='img_shape img_shape_3' src={shape5} alt='shape 3' /></RellaxWrapper> */}
            {/* <RellaxWrapper zIndex={0} speed={0}><img className='img_main' src={project1} alt='project 1' /></RellaxWrapper> */}
            <img className='img_main' src={project1} alt='project 1' />
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
        <RellaxWrapper speed={0.5} zIndex={-1}><img className='img_shape img_shape_4' src={shape4} alt='shape 3' /></RellaxWrapper>
        <div className='content_col'>
          <RellaxWrapper speed={0} zIndex={0}>
            <h1 className='heading'>GET IN TOUCH</h1>
            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molesti</p>
            <div className='social_icons'>
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-youtube-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-github-square"></i>
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



      <footer>
        <p>Design by Jishnu and built by Tanisha</p>
      </footer>



    </div>
  );
}

export default App;
