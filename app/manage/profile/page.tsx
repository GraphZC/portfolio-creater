'use client'

import useUpdateUser from "@/api-hook/user/useUpdateUser";
import BackButton from "@/components/BackButton";
import ProfileForm from "@/components/profile/ProfileForm";
import User from "@/interface/User";
import { useSession } from "next-auth/react";

export default function ManageProfilePage() {
    const { data: session, status  } = useSession();
    const updateUserMutation = useUpdateUser();

    if (status === 'loading') return <div>Loading...</div>

    const handleEditUser = async (user: User) => {
        const updated = await updateUserMutation.mutateAsync(user);
        if (updated) {
            alert('แก้ไขโปรไฟล์สำเร็จ')
        }
    }
    return (
        <div className="mt-5">
            <BackButton href="/manage" />
            <h1 className="font-bold text-2xl">
                จัดการโปรไฟล์ 
            </h1>
            <ProfileForm 
                username={session?.user?.email!.split('@')[0]!}
                handleEdit={handleEditUser}
            />
        </div>
    )
}
