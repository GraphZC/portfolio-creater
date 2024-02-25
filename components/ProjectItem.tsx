import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ProjectItemProps {
    projectId: string;
    title: string;
    type: string;
}

export default function ProjectItem({ 
    projectId, 
    title, 
    type 
} : ProjectItemProps) {
    return (
        <Link 
            href={`/project/${projectId}`}
            className="flex justify-between px-6 bg-[#07203E] rounded-lg py-4"
        >
            <div>
                <h2 className="font-medium text-2xl text-[#F7CF4C]">
                    {title}
                </h2>
                <p className="text-white font-extralight text-sm">
                    {type}
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
