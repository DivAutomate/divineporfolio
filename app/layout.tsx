import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Mono, Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Divine Jude — AI Implementation & Workflow Automation',
    template: '%s | Divine Jude',
  },
  description: 'Divine Jude designs AI-powered workflows, automated data pipelines, and system integrations that remove manual work for operations teams.',
  generator: 'v0.app',
  metadataBase: new URL('https://divinejude.com'),
  authors: [{ name: 'Divine Jude' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Divine Jude — AI Implementation & Workflow Automation',
    description: 'Reliable AI implementation, workflow automation, and systems integration.',
    url: '/',
    siteName: 'Divine Jude',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divine Jude — AI Implementation & Workflow Automation',
    description: 'Reliable AI implementation, workflow automation, and systems integration.',
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
      <body className="antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
