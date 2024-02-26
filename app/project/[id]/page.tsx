'use client'

import useProject from "@/api-hook/project/useProject"
import { useParams } from "next/navigation"

export default function ProjectPage() {
    const { id } = useParams<{ id: string }>()
    const { data: project, isPending, error } = useProject(id);

    if (isPending) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="mt-6">
            <h1 className="font-medium text-3xl mb-3">
                { project.name }
            </h1>
            <div className="font-light text-gray-500">
                { project.type }
            </div>
            <div className="font-light">
                { project.description }
            </div>
            { project.sourceUrl && <div className="mt-3">
                <a href={ project.sourceUrl } className="text-blue-600">Source URL</a>
            </div> }
            { project.demoUrl && <div className="mt-3">
                <a href={ project.demoUrl } className="text-blue-600">Demo URL</a>
            </div> }
        </div>
    )
}
