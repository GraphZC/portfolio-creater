'use client'

import useUser from "@/api-hook/user/useUser";
import BackButton from "@/components/BackButton";
import ProjectList from "@/components/project/ProjectList";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function ManageProjectPage() {
    const { data: session, status  } = useSession();
    const { data: user, isPending, error } = useUser(session?.user?.email!.split('@')[0]!);
    
    if (status === 'loading') return <div>Loading...</div>

    if (isPending) return <div>Loading...</div>

    if (error) return <div>Error: {error.message}</div>

    return (
        <div className="mt-5">
            <BackButton href="/manage" />
            
            <div className="flex justify-between">
                <h1 className="font-bold text-2xl my-auto">
                    จัดการโปรเจค
                </h1>
                <Link
                    href={`/manage/project/create`}
                    className="text-center my-auto p-3 rounded-xl bg-[#07203E] text-white hover:text-[#F7CF4C]"
                >
                    <FaPlus />
                </Link>
            </div>
            <ProjectList 
                projects={user?.projects}
            />
            
        </div>
    )
}
