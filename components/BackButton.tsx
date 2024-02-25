import Link from "next/link";
import React from "react";

interface BackButtonProps {
    href: string;
}

export default function BackButton({ href } : BackButtonProps ) {
    return (
        <Link 
            href={href}
            className="text-blue-700 hover:text-blue-500"
        >
            &lt; ย้อนกลับ
        </Link>
    )
}