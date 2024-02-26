import User from "@/interface/User";
import axios from "@/lib/axios/axios.config";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import userQueryKeys from "./userQueryKey";

const updateUser = async (user: User) => {
    const { data } = await axios.put<User>(`/user/${user.username}`, user);

    return data;
}

const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (user: User) => updateUser(user),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: userQueryKeys.all
            });
        }
    })
};

export default useUpdateUser;