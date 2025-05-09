import { Link } from "react-router";

export default function SocialMedia () {
    return (
    <section className="flex flex-row justify-center items-center gap-4">
      <Link to="https://github.com/JossySola" target="_blank">
        <img width={32} height={32} className="dark:relative" src="github-mark-white.png" alt="GitHub" title="GitHub" aria-label="GitHub Profile" />
        <img width={32} height={32} className="dark:hidden" src="github-mark.png" alt="GitHub" title="GitHub" aria-label="GitHub Profile" />
      </Link>
      <Link to="https://www.instagram.com/jossysolart/" target="_blank">
        <img width={32} height={32} src="instagram.webp" alt="Instagram" title="Instagram" aria-label="Instagram Profile" />
      </Link>
      <Link to="https://www.linkedin.com/in/jossysola/" target="_blank">
        <img width={32} height={32} src="linkedin.webp" alt="LinkedIn" title="LinkedIn" aria-label="LinkedIn Profile" />
      </Link>
    </section>
    )
}