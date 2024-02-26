'use client'

import useCreateProject from "@/api-hook/project/useCreateProject";
import CreateProjectForm from "@/components/project/CreateProjectForm";
import Project from "@/interface/Project";
import { CreateProjectType } from "@/validation/projectValidation";
import { useRouter } from "next/navigation";

export default function CreateProjectPage() {
    const createMutation = useCreateProject();
    const router = useRouter();
    
    const handleCreate = async (project: CreateProjectType) => {
        const formData = new FormData();
        formData.append('userId', project.userId);
        formData.append('name', project.name);
        formData.append('type', project.type);
        formData.append('description', project.description);
        formData.append('image', project.image[0]);
        formData.append('sourceUrl', project.sourceUrl);
        formData.append('demoUrl', project.demoUrl);

        const created = await createMutation.mutateAsync(formData);
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