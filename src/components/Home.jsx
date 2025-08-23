import Footer from './Footer'
import NavBar from './NavBar'

export default function Home() {
    
    return (
        <>
            <NavBar />
            <article className="intro">
                <h1 className="title">Elizabeth Ray</h1>
                <p className="jobTitle">Software Developer</p>
            </article>
            <article className="aboutMe">
                <h2 className="aboutMeTitle">A little bit about me...</h2>
                <img className="profileImage" src={import.meta.env.BASE_URL + "/assets/Elizabeth.jpeg"} alt="Elizabeth Ray"/>
                <p className="aboutMeText">I'm a career-changer previously working in Gait Analysis for 7 years after graduating with MSc Sport and Clinical Biomechanics in 2017. I tried a free coding week course in 2023 and fell in love!! I started my journey in Software Development with Northcoders in 2024 and I am now in a full-time role as a Software Developer at SaleCycle. I am very excited to see where my future in development will take me as I relish the continuous learning that comes with mastering new skills and enjoy applying my problem-solving abilities to everything from minor tasks to complex projects.</p>
            </article>
            <Footer />
        </>
    )
  }