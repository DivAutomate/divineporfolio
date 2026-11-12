'use client'

import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { SocialLinks } from '@/components/social-links'
import { site } from '@/lib/site'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [drafted, setDrafted] = useState(false)

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
    setDrafted(true)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <SiteNav />
      <main id="main-content">
        <header className="page-hero container">
          <p className="label">Contact</p>
          <h1>Let&apos;s make your week <em>lighter.</em></h1>
          <p className="lead">Tell me a little about your business and what you&apos;d like to hand off. I&apos;ll reply within two working days.</p>
        </header>

        <section className="contact-section section-tight">
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
              <button className="btn btn-primary" type="submit">Open email draft <ArrowUpRight size={16} aria-hidden="true" /></button>
              <p className="form-hint">This opens your email app with the message filled in. Nothing sends until you press send there.</p>
              {drafted && (
                <div className="form-note" role="status">
                  <p><strong>Draft ready.</strong> Your email app should be open. If it isn&apos;t, send the same details to <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
                </div>
              )}
            </form>

            <aside className="contact-aside" aria-label="Other ways to reach me">
              <div className="contact-card">
                <p className="label">Prefer to talk?</p>
                <p>Pick a time and we&apos;ll talk through what you need. 30 minutes, no pressure.</p>
                <a className="btn btn-primary contact-book-link" href={site.booking} target="_blank" rel="noreferrer">
                  Book an intro call <ArrowUpRight size={16} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              <div className="contact-card">
                <p className="label">Prefer email?</p>
                <a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a>
                <button type="button" className="copy-button" onClick={copyEmail} aria-live="polite">
                  {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                  {copied ? 'Copied' : 'Copy address'}
                </button>
              </div>
              <div className="contact-card">
                <p className="label">What happens next</p>
                <ol className="contact-steps">
                  <li>You send the details of what you want to hand off.</li>
                  <li>I reply within two working days with questions or a time to talk.</li>
                  <li>If it&apos;s a fit, we agree scope and a start date.</li>
                </ol>
              </div>
              <div className="contact-card">
                <p className="label">Availability</p>
                <p><span className="status-dot" aria-hidden="true" /> Taking new projects for Q4 2026.</p>
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
