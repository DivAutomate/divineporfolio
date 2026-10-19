'use client'

import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { SocialLinks } from '@/components/social-links'
import { site } from '@/lib/site'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const message = String(form.get('message') || '')
    const subject = encodeURIComponent(`Project enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <SiteNav />
      <main>
        <header className="page-hero container">
          <p className="label">Contact</p>
          <h1>Let&apos;s make your week <em>lighter.</em></h1>
          <p className="lead">Tell me a little about your business and what you&apos;d like to hand off. I&apos;ll reply within two working days.</p>
        </header>

        <section className="contact-section">
          <div className="container contact-layout">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                <span className="label">Your name</span>
                <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" required />
              </label>
              <label>
                <span className="label">Email address</span>
                <input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
              </label>
              <label>
                <span className="label">What do you need help with?</span>
                <textarea name="message" rows={5} placeholder="Inbox and calendar support, a project to coordinate, a lead list to build..." required />
              </label>
              <button className="btn btn-primary" type="submit">Send enquiry <ArrowUpRight size={16} aria-hidden="true" /></button>
            </form>

            <aside className="contact-aside" aria-label="Other ways to reach me">
              <div className="contact-card">
                <p className="label">Prefer email?</p>
                <a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a>
                <button type="button" className="copy-button" onClick={copyEmail} aria-live="polite">
                  {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                  {copied ? 'Copied' : 'Copy address'}
                </button>
              </div>
              <div className="contact-card">
                <p className="label">Availability</p>
                <p><span className="status-dot" aria-hidden="true" /> Taking new projects for Q4 2026: executive and virtual assistance, project coordination, lead generation, SEO and e-commerce support, and workflow setup.</p>
              </div>
              <div className="contact-card">
                <p className="label">Elsewhere</p>
                <SocialLinks />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
