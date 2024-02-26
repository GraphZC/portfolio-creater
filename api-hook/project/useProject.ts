import projectQueryKeys from "./projectQueryKey";
import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios/axios.config";
import Project from "@/interface/Project";


const fetchProject = async (projectname: string) => {
    const { data } = await axios.get<Project>(`/project/${projectname}`);

    return data;
}

const useProject = (id: string) => {
    return useQuery({
        queryKey: projectQueryKeys.detail(id),
        queryFn: () => fetchProject(id)
    })
}

export default useProject;