'use client'

import useCreateProject from "@/api-hook/project/useCreateProject";
import CreateProjectForm from "@/components/project/CreateProjectForm";
import Project from "@/interface/Project";
import { useRouter } from "next/navigation";

export default function CreateProjectPage() {
    const createMutation = useCreateProject();
    const router = useRouter();
    
    const handleCreate = async (project: Project) => {
        const created = await createMutation.mutateAsync(project);
        if (created) {
            router.push('/manage/project');
        } 
    }

    return (
        <div>
            <CreateProjectForm handleCreate={handleCreate} />
        </div>
    )
}