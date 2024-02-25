'use client'

import useUser from "@/api/user/useUser";
import HeaderProfile from "@/components/HeaderProfile";
import ProjectList from "@/components/ProjectList";
import SocialList from "@/components/SocialList";
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
			<HeaderProfile user={user!} />
			<SocialList socials={[
				{ name: "facebook", link: "https://www.facebook.com/tanaroeg.ocharoen" },
				{ name: "github", link: "" },
			 ]} />
			<div className="px-5">
				<ProjectList />
			</div>
            { username }
		</>
	);
}
