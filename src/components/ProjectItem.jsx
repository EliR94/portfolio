import NavBar from "./NavBar"
import data from '../data.json'
import { useLocation } from "react-router-dom";

export default function ProjectItem() {
    const location = useLocation();
    const { pathname } = location;
    const pathnameArr = pathname.split("/")
    const projectTitle = pathnameArr[pathnameArr.length-1].replaceAll('-', ' ')

    const projectIndex = data.findIndex((project) => project.title === projectTitle)
    const project = data[projectIndex]

    return (
        <>
            <NavBar />
            <section className="projectItemSection">
                <h1 className="projectTitle">{project.title.toUpperCase()}</h1>
                {project.image_name ? 
                    <img className="projectImage" src={`/assets/${project.image_name}`} alt={`${project.title} preview image`}/>
                    : null}
                <h2 className="projectH2">{project.type.toUpperCase()} PROJECT</h2>
                <h2 className="projectH2">Frontend</h2>
                <p>{project.frontend.created}</p>
                <p>{project.frontend.description}</p>
                <p>Tech Stack: {project.frontend.tech}</p>
                <a className="externalLink" href={project.frontend.hosted_link}target="_blank">Visit the live site!</a>
                <a className="externalLink" href={project.frontend.repo_link}target="_blank">See the repo!</a>
                {project.demo_video ? 
                    <a className="externalLink" href={project.demo_video} target="_blank">Watch the demo video on the Northcoders website!</a>
                : null}

            {project.backend ? 
            <>
                <h2 className="projectH2">Backend</h2>
                <p>{project.backend.created}</p>
                <p>{project.backend.description}</p>
                <p>Tech Stack: {project.backend.tech}</p>

                <a className="externalLink" href={project.backend.hosted_link}target="_blank">See the hosted API!</a>
                <a className="externalLink" href={project.backend.repo_link}target="_blank">See the repo!</a>
            </>
            : null}
                
            </section>
        </>
    )
}