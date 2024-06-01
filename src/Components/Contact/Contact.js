import { RellaxWrapper } from 'react-rellax-wrapper'
import { gitHubLink, linkedInLink, instaLink, youTubeLink } from '../../Content/variable'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shape2 from '../../Images/shape2.png'
import './contact.scss'

const service_id = process.env.REACT_APP_SERVICE_ID;
const template_id = process.env.REACT_APP_TEMPLATE_ID;
const user_id = process.env.REACT_APP_USER_ID;

const ContactSection = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [mssg, setMssg] = useState('')

  const form = useRef();

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
            <a href={gitHubLink} target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
            <a href={linkedInLink} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href={instaLink} target="_blank" rel="noreferrer"><i className="fab fa-instagram-square"></i></a>
            <a href={youTubeLink} target="_blank" rel="noreferrer"><i className="fab fab fa-youtube-square"></i></a>
          </div>
        </RellaxWrapper>
      </div>
      <div className='form_col'>
        <form onSubmit={sendEmail} ref={form}>
          <input name="user_name" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter your name" />
          <input name="user_email" value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Enter your email" />
          <input name="user_number" value={number} onChange={e => setNumber(e.target.value)} type="text" placeholder="Enter your phone number" />
          <textarea name="user_message" value={mssg} onChange={e => setMssg(e.target.value)} rows="4" placeholder="Enter message"></textarea>
          <button type="submit" disabled={name==='' || email==='' || number==='' || mssg===''}>Submit</button>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar/>
    </section>
  )
}

export default ContactSection