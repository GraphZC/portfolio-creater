import ProjectItem from "./ProjectItem";

export default function ProjectList() {
    return (
        <div className="container my-3 flex flex-col gap-4 mt-8 mx-auto">
            { Array(5).fill(0).map((_, index) => {
                return (
                    <ProjectItem 
                        key={index}
                        projectId="1"
                        title="Project 1"
                        type="Web Application"
                    />
                )
            }) }
        </div>
    )
}
