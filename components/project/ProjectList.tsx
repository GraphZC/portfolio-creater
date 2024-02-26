import Project from "@/interface/Project";
import ProjectItem from "./ProjectItem";

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="container my-3 flex flex-col gap-4 mt-8 mx-auto">
            { projects.map((project, index) => {
                return (
                    <ProjectItem 
                        key={index}
                        project={project}
                    />
                )
            }) }
        </div>
    )
}
