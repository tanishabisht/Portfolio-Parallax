import { useRef, useState } from 'react';

// parallax
import { RellaxWrapper } from 'react-rellax-wrapper'

// emailjs
import emailjs from 'emailjs-com';

// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// styling
import './contact.scss'

// images
import shape2 from '../../Images/shape2.png'



const About = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [mssg, setMssg] = useState('')

    const form = useRef();

    const service_id = 'service_5cvz05d'
    const template_id = 'template_lvc7sxv'
    const user_id = 'user_nAvZsultEnCIpovi1phHY'


    const sendEmail = (e) => {
      e.preventDefault()
      emailjs.sendForm(service_id, template_id, form.current, user_id)
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
      <section id='contact' className='contact_section'>
        <RellaxWrapper speed={0.5} zIndex={-1}><img className='img_shape img_shape_4' src={shape2} alt='shape 3' /></RellaxWrapper>
        <div className='content_col'>
          <RellaxWrapper speed={0} zIndex={0}>
            <div>
              <h1 className='heading'>GET IN TOUCH</h1>
              <p className='para'>Feel free to connect with me :)</p>
            </div>
            <div className='social_icons'>
              <a href='https://github.com/JishnuGoyal' target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
              <a href='https://www.linkedin.com/in/jishnu-goyal-4333521b3/' target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
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
    )
}



export default About