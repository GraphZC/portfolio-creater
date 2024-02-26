'use client'

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ManagePage() {
    const { data: user, status  } = useSession();

    if (status === 'loading') return <div>Loading...</div>

    return (
        <div className="mt-5">
            <h1 className="font-bold text-2xl">
                จัดการ
            </h1>
            <div>
                สวัสดีคุณ <span className="font-bold">{ user?.user?.name }</span>
            </div>
            <div className="flex flex-col gap-5 mt-5">
                <Link
                    href={`/manage/profile/`}
                    className="block w-full text-center py-5 px-8 border bg-[#07203E] text-white rounded-xl hover:text-[#F7CF4C]"
                >
                    จัดการโปรไฟล์
                </Link>
                <Link
                    href={`/manage/project/`}
                    className="block w-full text-center py-5 px-8 border bg-[#07203E] text-white rounded-xl hover:text-[#F7CF4C]"
                >
                    จัดการโปรเจค
                </Link>

            </div>
        </div>
    )
}
