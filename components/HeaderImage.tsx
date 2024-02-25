import Image from "next/image";
import headerBackgroud from "../public/assets/header-background.jpg"

export default function HeaderImage() {
    return (
        <>
            <Image
                src={headerBackgroud}
                alt="header-background"
                className="w-full h-[130px] object-cover"
            />
        </>
    )
}
