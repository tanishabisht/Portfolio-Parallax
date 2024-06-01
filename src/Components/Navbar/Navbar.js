import { menuItems } from '../../Content/variable'
import './navbar.scss'

const Navbar = () => {
    return (
        <section className='menu'>
            {menuItems.map(i => (
                <span className='item-wrapper'><a smooth={true} duration={1000} href={i.section} className='item'>{i.text}</a></span>
            ))}
        </section>
    )
}

export default Navbar