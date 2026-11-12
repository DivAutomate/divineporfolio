'use client'

import Link from 'next/link'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { SocialLinks } from '@/components/social-links'
import { engagements, site } from '@/lib/site'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [state, handleSubmit, reset] = useForm(site.formspreeId)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
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
            {state.succeeded ? (
              <div className="contact-form form-success" role="status">
                <p className="label">Message sent</p>
                <p className="form-success-title">Thanks — I&apos;ve got it.</p>
                <p className="form-success-copy">I reply within two working days. If you&apos;d rather talk it through, pick a slot and we&apos;ll go through it together.</p>
                <div className="form-success-actions">
                  <a className="btn btn-primary" href={site.booking} target="_blank" rel="noreferrer">
                    Book an intro call <ArrowUpRight size={16} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <button className="text-link" type="button" onClick={reset}>Send another message</button>
                </div>
              </div>
            ) : (
              <form
                className="contact-form"
                action={`https://formspree.io/f/${site.formspreeId}`}
                method="POST"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="subject" value="New project enquiry from {{ name }}" />
                <div className="form-honeypot" aria-hidden="true">
                  <label>
                    <span>Leave this field empty</span>
                    <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                <label>
                  <span className="label">Your name</span>
                  <input name="name" type="text" autoComplete="name" placeholder="Jane Smith" required />
                  <ValidationError className="field-error" prefix="Name" field="name" errors={state.errors} />
                </label>
                <label>
                  <span className="label">Email address</span>
                  <input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
                  <ValidationError className="field-error" prefix="Email" field="email" errors={state.errors} />
                </label>
                <label>
                  <span className="label">What do you need help with?</span>
                  <textarea name="message" rows={5} placeholder="Inbox and calendar support, a project to coordinate, a lead list to build..." required />
                  <ValidationError className="field-error" prefix="Message" field="message" errors={state.errors} />
                </label>
                <button className="btn btn-primary" type="submit" disabled={state.submitting}>
                  {state.submitting ? 'Sending…' : 'Send message'} <ArrowUpRight size={16} aria-hidden="true" />
                </button>
                <p className="form-hint">Goes straight to my inbox. I reply within two working days.</p>
                {state.errors && (
                  <div className="form-error" role="alert">
                    <p>That didn&apos;t send. Try again in a moment, or email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
                  </div>
                )}
              </form>
            )}

            <aside className="contact-aside" aria-label="Other ways to reach me">
              <div className="contact-card">
                <p className="label">Monthly retainers</p>
                <ul className="contact-rates">
                  {engagements
                    .filter((engagement) => engagement.cadence === '/month')
                    .map((engagement) => (
                      <li key={engagement.name}>
                        <span>{engagement.name}</span>
                        <strong>{engagement.price}{engagement.cadence}</strong>
                      </li>
                    ))}
                </ul>
                <Link className="text-link" href="/#pricing">See what&apos;s included <ArrowUpRight size={14} aria-hidden="true" /></Link>
              </div>
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
