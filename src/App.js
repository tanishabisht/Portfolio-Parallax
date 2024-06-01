import { Navbar, HeroSection, AboutSection, YoutubeSection, SkillsSection, ProjectsSection, ContactSection, Footer } from './Components'
import './App.scss';



function App() {
  return (
    <div className='bg'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <YoutubeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer/>
    </div>
  );
}



export default App;