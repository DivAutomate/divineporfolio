import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/site'

export function ProjectCard({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? 'is-featured' : ''}`}>
      <Link href={project.href} className="project-link">
        <div className="project-media">
          <img src={project.image} alt={project.imageAlt} loading={index < 2 ? 'eager' : 'lazy'} decoding="async" />
          <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div className="project-body">
          <p className="label">{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="tag-row" aria-label="Tools and skills">
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          <span className="project-more">Read case study <ArrowUpRight size={15} aria-hidden="true" /></span>
        </div>
      </Link>
    </article>
  )
}
