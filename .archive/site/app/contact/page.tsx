'use client'

import { ArrowLeft, ArrowUpRight, Copy, Mail } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText('judedivine9@gmail.com')
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
    window.location.href = `mailto:judedivine9@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="contact-page" id="top">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="/">Divine Jude<span className="dot">.</span></a>
        <a className="back-link" href="/"><ArrowLeft size={15} /> Back home</a>
      </nav>

      <section className="contact-page-hero">
        <div className="eyebrow">Contact <span>Let&apos;s make something useful</span></div>
        <div className="contact-page-grid">
          <h1>Let&apos;s make<br /><em className="contact-highlight">something</em><br />meaningful.</h1>
          <div className="contact-intro">
            <p>Have a project, an idea, or just a question? Tell me a little about it and I&apos;ll get back to you within a couple of working days.</p>
            <div className="direct-contact">
              <span>Prefer email?</span>
              <a href="mailto:judedivine9@gmail.com">judedivine9@gmail.com <ArrowUpRight size={14} /></a>
              <button type="button" className="copy-contact" onClick={copyEmail}><Copy size={13} /> {copied ? 'Copied' : 'Copy address'}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label><span>01 / Your name</span><input name="name" type="text" placeholder="Jane Smith" required /></label>
          <label><span>02 / Email address</span><input name="email" type="email" placeholder="jane@company.com" required /></label>
          <label><span>03 / Tell me about the project</span><textarea name="message" placeholder="What are you working on?" rows={5} required /></label>
          <button className="submit-button" type="submit">Send enquiry <ArrowUpRight size={18} /></button>
        </form>
        <aside className="contact-aside">
          <div className="aside-icon"><Mail size={18} /></div>
          <p>Currently taking on select branding, web design, and digital product projects for Q4 2026.</p>
          <a href="https://linkedin.com/in/divinechidubem" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
        </aside>
      </section>

      <footer><span>© 2026 Divine Jude</span><span>AI implementation · Workflow automation</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
