import Link from "next/link";

export default function Footer() {
    return (
        <footer className="font-extralight text-center py-3">
            Designed by&nbsp;
            <Link 
                href='https://github.com/GraphZC'
                className="text-blue-500 hover:underline"
            >
                Tanareog  O-Charoen
            </Link>
        </footer>
    )
}
