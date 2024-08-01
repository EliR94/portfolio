import Footer from './Footer'
import NavBar from './NavBar'

export default function Home() {
    
    return (
        <>
            <NavBar />
            <article className="intro">
                <h1 className="title">Elizabeth Ray</h1>
                <p className="jobTitle">Junior Software Developer</p>
            </article>
            <article className="aboutMe">
                <h2 className="aboutMeTitle">A little bit about me...</h2>
                <img className="profileImage" src={import.meta.env.BASE_URL + "/assets/Elizabeth.jpeg"} alt="Elizabeth Ray"/>
                <p className="aboutMeText">I'm a career-changer previously working in Gait Analysis for 7 years after graduating with MSc Sport and Clinical Biomechanics in 2017. I tried a free coding week course in 2023 and fell in love!! I started my journey in Software Development with Northcoders and I am very excited to see where my future in development will take me!! I'm currently in a part-time role as a Web Developer Intern at 2Toucans and seeking a Junior Software Developer position.</p>
            </article>
            <Footer />
        </>
    )
  }