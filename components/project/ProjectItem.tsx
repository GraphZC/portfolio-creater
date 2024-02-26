import Project from "@/interface/Project";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ProjectItemProps {
    project: Project
}

export default function ProjectItem({ 
    project
} : ProjectItemProps) {
    return (
        <Link 
            href={`/project/${project.id}`}
            className="flex justify-between px-6 bg-[#07203E] rounded-lg py-4"
        >
            <div>
                <h2 className="font-medium text-2xl text-[#F7CF4C]">
                    {project.name}
                </h2>
                <p className="text-white font-extralight text-sm">
                    {project.type}
                </p>
            </div>
            <div
                className="my-auto"
            >
                <FaArrowRight className="text-2xl text-[#FCEBB7]" />
            </div>
        </Link>
    )
}
