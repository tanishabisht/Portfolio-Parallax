import './navbar.scss'



const Navbar = () => {

    const menuItems = [
        {section:'#aboutme', text:'ABOUT'},
        {section:'#youtube', text:'YOUTUBE'},
        {section:'#skills', text:'SKILLS'},
        {section:'#project', text:'PROJECTS'},
        {section:'#contact', text:'GET IN TOUCH'},
    ]

    return (
        <section className='menu'>
            {menuItems.map(i => (
                <span className='item-wrapper'><a smooth={true} duration={1000} href={i.section} className='item'>{i.text}</a></span>
            ))}
        </section>
    )
}



export default Navbar