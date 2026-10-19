import { site } from '@/lib/site'

export function SocialLinks() {
  return (
    <ul className="social-links" aria-label="Social profiles">
      {site.socials.map((social) => (
        <li key={social.label}>
          <a href={social.href} target="_blank" rel="noreferrer">
            {social.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
