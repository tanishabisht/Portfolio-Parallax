import { linkedInLink } from '../../Content/variable'
import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <p>Designed and built by <a href={linkedInLink} target="_blank" rel="noreferrer">Tanisha Bisht</a></p>
        </footer>
    )
}

export default Footer