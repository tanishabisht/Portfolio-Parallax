import './App.css';
import me from './Images/me.jpg'
import shape1 from './Images/shape1.png'

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

    </div>
  );
}

export default App;
