import './navbar.scss'



const Navbar = () => {
    return (
        <section className='menu'>
            <span className='item-wrapper'><a smooth={true} duration={1000} href='#aboutme' className='item'>ABOUT</a></span>
            <span className='item-wrapper'><a smooth={true} duration={1000} href='#youtube' className='item'>UTUBE</a></span>
            <span className='item-wrapper'><a smooth={true} duration={1000} href='#skills' className='item'>SKILLS</a></span>
            <span className='item-wrapper'><a smooth={true} duration={1000} href='#project' className='item'>PROJECTS</a></span>
            <span className='item-wrapper'><a smooth={true} duration={1000} href='#contact' className='item'>GET IN TOUCH</a></span>
        </section>
    )
}



export default Navbar