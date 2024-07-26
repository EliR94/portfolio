import NavBar from "./NavBar"
import data from '../data.json'

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
                        <img className="projectImage" src={`src/assets/${project.image_name}`} alt={`${project.title} preview image`}/>
                        : null}
                    </li>
                    )}
                </ul>
            </section>
        </>
    )
}