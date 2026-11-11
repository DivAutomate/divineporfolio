import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { site, siteUrl } from '@/lib/site'
import './globals.css'

const manrope = localFont({
  src: './fonts/manrope-variable-latin.woff2',
  weight: '200 800',
  style: 'normal',
  variable: '--font-manrope',
  display: 'swap',
})

const dmMono = localFont({
  src: [
    { path: './fonts/dm-mono-400-latin.woff2', weight: '400', style: 'normal' },
    { path: './fonts/dm-mono-500-latin.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-dm-mono',
  display: 'swap',
})

const instrumentSerif = localFont({
  src: [
    { path: './fonts/instrument-serif-regular-latin.woff2', weight: '400', style: 'normal' },
    { path: './fonts/instrument-serif-italic-latin.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Divine Jude — Virtual Assistant & Operations Partner',
    template: '%s | Divine Jude',
  },
  description: 'Divine Jude is a virtual assistant and operations partner offering executive support, project coordination, lead generation, and e-commerce growth for busy teams.',
  metadataBase: new URL(siteUrl),
  authors: [{ name: 'Divine Jude' }],
  creator: 'Divine Jude',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Divine Jude — Virtual Assistant & Operations Partner',
    description: 'Executive and virtual assistance, project coordination, lead generation, and e-commerce support for busy teams.',
    url: '/',
    siteName: 'Divine Jude',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divine Jude — Virtual Assistant & Operations Partner',
    description: 'Executive and virtual assistance, project coordination, lead generation, and e-commerce support for busy teams.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f3ef',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: siteUrl,
    image: `${siteUrl}${site.portrait}`,
    jobTitle: 'Virtual Assistant & Operations Partner',
    email: `mailto:${site.email}`,
    address: { '@type': 'PostalAddress', addressCountry: 'NG' },
    sameAs: site.socials.map((social) => social.href),
    knowsAbout: [
      'Executive assistance',
      'Project coordination',
      'Lead generation',
      'E-commerce operations',
      'Workflow automation',
    ],
  }

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" id="top" suppressHydrationWarning>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
