import { 
  // Navbar, 
  Hero, About, Youtube, Skills, 
  // Projects, Contact, 
  Footer } from './Components'
import './App.scss';



function App() {
  return (
    <div className='bg'>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Youtube />
      <Skills />
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer/>
    </div>
  );
}



export default App;