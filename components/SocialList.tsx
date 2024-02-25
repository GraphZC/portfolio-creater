import { 
    FaFacebook, 
    FaGithub, 
    FaInstagram, 
    FaLine, 
    FaLinkedin, 
    FaTwitter, 
    FaYoutube, 
    FaTiktok 
} from "react-icons/fa";

interface SocialLink {
    name: "facebook" | "instragram" | "line" | "linkedin" | "tiktok" | "x" | "youtube" | "github";
    link: string;
}

interface SocialListProps {
    socials: SocialLink[];    
}

export default function SocialList({ socials } : SocialListProps) {
    const iconsMap: { 
        [key: string]: JSX.Element 
    } = {
        facebook: <FaFacebook />,
        instragram: <FaInstagram />,
        line: <FaLine />,
        linkedin: <FaLinkedin />,
        tiktok: <FaTiktok />,
        x: <FaTwitter />,
        youtube: <FaYoutube />,
        github: <FaGithub />,
    }
    return (
        <div className="flex justify-center gap-2 text-xl mt-2">
            { socials.map((social, index) => {
                return (
                    <a 
                        href={social.link}
                        target="_blank"
                        key={index}
                    >
                        {iconsMap[social.name]}
                    </a>
                )
            }) }
        </div>
    )
}
