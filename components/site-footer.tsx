import { SocialLinks } from '@/components/social-links'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>© 2026 Divine Jude</span>
        <span>Virtual assistance · Operations · Growth</span>
        <SocialLinks />
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
