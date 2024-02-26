'use client'

import useUser from "@/api-hook/user/useUser";
import HeaderProfile from "@/components/profile/HeaderProfile";
import ProjectList from "@/components/project/ProjectList";
import SocialList from "@/components/social/SocialList";
import { useParams } from "next/navigation";

export default function ViewPortfolio() {
    const { username } = useParams<{ username: string }>();

    const { data: user, isPending, error } = useUser(username);

    if (isPending) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

	return (
		<>
			<HeaderProfile 
				user={ user } 
			/>
			<SocialList 
				socials={ user.social } 
			 />
			<ProjectList 
				projects={ user.projects }
			/>
		</>
	); 
}
