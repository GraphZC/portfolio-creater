import Project from "@/interface/Project";
import axios from "@/lib/axios/axios.config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import projectQueryKeys from "./projectQueryKey";

const createProjcet = async (project: FormData) => {
    const { data } = await axios.post<Project>('/project', {
        userId: project.get('userId'),
        name: project.get('name'),
        type: project.get('type'),
        description: project.get('description'),
        image: project.get('image'),
        sourceUrl: project.get('sourceUrl'),
        demoUrl: project.get('demoUrl'),
    }, {
        headers: {
            "Content-Type": 'multipart/form-data',
        }
    });

    return data;
}

const useCreateProject = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createProjcet,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: projectQueryKeys.all
            });
        }
    }); 
}

export default useCreateProject;
