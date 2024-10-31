import ProjectsCard from "./projectsCard";
import { projects } from "../data";
import SectionTitle from "./sectionTitle"

const Projects = () => {
    return (
        <section className="py-20 align-element" id="projects">
            <SectionTitle text='webCreations' />
            <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project) => {
                    return <ProjectsCard key={project.id} {...project} />
                })}
            </div>
        </section>
    );
}

export default Projects;