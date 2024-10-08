import NavBar from "./NavBar"
import data from '../data.json'
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Projects() {
    return (
        <>
            <NavBar />
            <h1>Projects</h1>
            <section>
                <ul className="projectList">
                    {data.map((project)=> 
                    <li key={project.title} className="projectCard">
                        <h3>{project.title}</h3>
                        {project.image_name ? 
                        <img className="projectImageCropped" src={import.meta.env.BASE_URL + `/assets/${project.image_name}`} alt={`${project.title} preview image`}/>
                        : null}
                        <button type="button" className="seeMoreButton">
                            <Link className="seeMoreLink" to={`/projects/${project.title.replaceAll(' ', '-')}`}><p className="seeMoreText">See more!</p></Link>
                        </button>
                    </li>
                    )}
                </ul>
            </section>
            <Footer />
        </>
    )
}