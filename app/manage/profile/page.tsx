

import BackButton from "@/components/BackButton";
import ProfileForm from "@/components/ProfileForm";

export default function ManageProfilePage() {
    return (
        <div className="mt-5">
            <BackButton href="/manage" />
            <h1 className="font-bold text-2xl">
                จัดการโปรไฟล์ 
            </h1>
            <ProfileForm />
        </div>
    )
}
