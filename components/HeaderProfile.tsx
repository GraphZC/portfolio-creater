import Image from "next/image";
import profilePicture from "../public/assets/profile-picture.jpg"
import { User } from "@prisma/client";

export default function HeaderProfile({ user }: { user: User }) {
    return (
        <>
            <div className="flex justify-center mt-[-70px]">
                <Image
                    src={profilePicture}
                    alt="profile-picture"
                    className="w-[135px] h-[135px] rounded-full object-cover p-2 bg-white"
                />
            </div>
            <div className="text-center">
                <h1 className="font-medium text-xl">
                    { user.name }
                </h1>
                <p className="font-extralight italic text-sm text-gray-500">
                    { user.description }
                </p>
            </div>
        </>

    )
}
