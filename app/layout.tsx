import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
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

export const metadata: Metadata = {
  title: {
    default: 'Divine Jude — Virtual Assistant & Operations Partner',
    template: '%s | Divine Jude',
  },
  description: 'Divine Jude is a virtual assistant and operations partner offering executive support, project coordination, lead generation, and e-commerce growth for busy teams.',
  generator: 'v0.app',
  metadataBase: new URL('https://divinejude.com'),
  authors: [{ name: 'Divine Jude' }],
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
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <body className="antialiased" id="top" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
