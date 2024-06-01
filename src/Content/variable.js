import me from '../Images/me.jpg'
import project1 from '../Images/project1.png'
import project2 from '../Images/project2.png'

export const menuItems = [
    {section:'#aboutme', text:'ABOUT'},
    {section:'#youtube', text:'YOUTUBE'},
    {section:'#skills', text:'SKILLS'},
    {section:'#project', text:'PROJECTS'},
    {section:'#contact', text:'GET IN TOUCH'},
]

export const nameCapitals = "JOHN DOE"
export const roleCapitales = "SOFTWARE DEVELOPER"

export const bioContent = [
    "I am a Master's in Computer Science student at Columbia University, having interest in programming and development and yes skating, swimming and photography.",
    'I have in hand experience in area number 1'
]

export const bioImage = me

export const youTubeLink = "https://www.youtube.com/watch?v=vwSlYG7hFk0"

export const youTubeContent = "I share my knowledge on my YouTube Channel where I teach Tech1 and Tech2"

export const allSkills = [
    {name:'React', level:'expert'},
    {name:'Node JS', level:'advanced'},
    {name:'Git GitHub', level:'intermediate'},
    {name:'AWS', level:'basic'}
]

export const allProjects = [
    {name: "ProjectName1", role: "Android Developer", image: project1, desc: "Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labore et dolore magna aliqua.", skillsArr: ["KOTLIN"], links: [{text: "VIEW ON PLAYSTORE", href: "https://play.google.com/store/apps/details?id=com.uptodd.uptoddapp"}]},
    {name: "ProjectName2", role: "Android Developer", image: project2, desc: "Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labore et dolore magna aliqua.", skillsArr: ["KOTLIN"], links: [{text: "VIEW ON PLAYSTORE", href: "https://play.google.com/store/apps/details?id=com.uptodd.uptoddapp"}]},
    {name: "ProjectName3", role: "Android Developer", image: project1, desc: "Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labore et dolore magna aliqua.", skillsArr: ["KOTLIN"], links: [{text: "VIEW ON PLAYSTORE", href: "https://play.google.com/store/apps/details?id=com.uptodd.uptoddapp"}]},
]

export const instaLink = "https://www.instagram.com/photonmadnesss/"
export const linkedInLink = "https://www.linkedin.com/in/tanisha-bisht/"
export const gitHubLink = "https://github.com/tanishabisht"
export const emailAddress = "tb3061@columbia.edu.in"