import Social from "@/interface/Social";
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

interface SocialListProps {
    socials: Social[];    
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
                        href={social.url}
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
