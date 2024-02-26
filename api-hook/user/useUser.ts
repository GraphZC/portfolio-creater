import userQueryKeys from "./userQueryKey";
import { useQuery } from "@tanstack/react-query";
import axios from "@/lib/axios/axios.config";
import User from "@/interface/User";

const fetchUser = async (username: string) => {
    const { data } = await axios.get<User>(`/user/${username}`);

    return data;
}

const useUser = (id: string) => {
    return useQuery({
        queryKey: userQueryKeys.detail(id),
        queryFn: () => fetchUser(id)
    })
}

export default useUser;