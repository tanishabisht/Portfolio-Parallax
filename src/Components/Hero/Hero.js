import { RellaxWrapper } from 'react-rellax-wrapper'
import { nameCapitals, roleCapitales } from '../../Content/variable'
import './hero.scss'

const HeroSection = () => {
    return (
        <section className="hero_section">
            <RellaxWrapper speed={-1.2}><h1>{nameCapitals}</h1></RellaxWrapper>
            <h2>{roleCapitales}</h2>
        </section>
    )
}

export default HeroSection