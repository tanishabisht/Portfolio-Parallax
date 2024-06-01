import { RellaxWrapper } from 'react-rellax-wrapper'
import './projects.scss'

const ProjectCardRight = (props) => {
    const {name, role, desc, image, skillsArr, links} = props

    return ( 
        <div className='row row_1'>
            <div className='desc_col'>
                <RellaxWrapper speed={-0.5} tablet={0.3} mobile={0.3} xs={0.3} >
                    <RellaxWrapper speed={-0.2}><h2 className='proj_name proj_name_1'>{name}</h2></RellaxWrapper>
                    <h3 className='proj_designation'>{role}</h3>
                    <p className='para'>{desc}</p>
                    <div className='stack_btns'>
                        {skillsArr.map(skill => <button>{skill}</button>)}
                        {links.map(link => <a href={link.href} target="_blank" rel="noreferrer"><button>{link.text}</button></a>)}
                    </div>
                </RellaxWrapper>
            </div>
            <div className='img_col'>
            <img className='img_main' src={image} alt='project 1' />
            </div>
        </div>
    )
}

export default ProjectCardRight