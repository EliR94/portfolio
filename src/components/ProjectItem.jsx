import NavBar from "./NavBar"
import data from '../data.json'
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

export default function ProjectItem() {
    const location = useLocation();
    const { pathname } = location;
    const pathnameArr = pathname.split("/")
    const projectTitle = pathnameArr[pathnameArr.length-1].replaceAll('-', ' ')

    const projectIndex = data.findIndex((project) => project.title === projectTitle)
    const project = data[projectIndex];
    if (!project) return <div>Item not found</div>;

    return (
        <>
            <NavBar />
            <section className={project.backend ? "projectItemFrontend" : "projectItemFullStack"}>
                    <h1 className="projectTitle">{project.title.toUpperCase()}</h1>

                    {project.demo_video ? 
                    <section className="video">
                        <h2>Demo Video:</h2>
                        <video controls controlsList="nodownload">
                            <source
                                src={`${import.meta.env.BASE_URL}${project.demo_video}`}
                                type="video/mp4"
                            />
                        </video>
                    </section>
                    : project.image_name ? 
                        <img className="projectImage" src={import.meta.env.BASE_URL + `/assets/${project.image_name}`} alt={`${project.title} preview image`}/>
                    : null}
                    <h2 className="projectH2">{project.type.toUpperCase()} PROJECT</h2>
                <section className={project.backend ? "projectGridFullStack" : null}>
                    {project.frontend && (<section className="frontendSection">
                        <h2 className="projectH2">Frontend</h2>
                        <ul className="projectCreatedInfo">
                            {project.frontend.created.map((item)=><li className="projectCreatedItem" key={item}>{item}</li>)}
                        </ul>
                        <p className="projectDescription">{project.frontend.description}</p>
                        <p className="projectTechStack">Tech Stack: {project.frontend.tech}</p>
                        {project.title === "City Explorer" ? null : 
                            <a className="externalLink" href={project.frontend.hosted_link}target="_blank">Visit the live site!</a>
                        }
                        <a className="externalLink" href={project.frontend.repo_link}target="_blank">See the repo!</a>
                    </section>)}
                    {project.backend ? 
                    <section className="backendSection">
                        <h2 className="projectH2">Backend</h2>
                        <ul className="projectCreatedInfo">
                            {project.backend.created.map((item)=><li className="projectCreatedItem" key={item}>{item}</li>)}
                        </ul>
                        <p className="projectDescription">{project.backend.description}</p>
                        <p className="projectTechStack">Tech Stack: {project.backend.tech}</p>

                        <a className="externalLink" href={project.backend.hosted_link}target="_blank">See the hosted API!</a>
                        <a className="externalLink" href={project.backend.repo_link}target="_blank">See the repo!</a>
                    </section>
                    : null}
                </section>
            </section>
            <Footer />
        </>
    )
}