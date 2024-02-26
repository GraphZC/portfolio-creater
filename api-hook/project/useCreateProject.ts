import Project from "@/interface/Project";
import axios from "@/lib/axios/axios.config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import projectQueryKeys from "./projectQueryKey";

const createProjcet = async (project: Project) => {
    const { data } = await axios.post<Project>('/project', project);

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
