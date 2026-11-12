'use client'

import type { ReactNode } from 'react'
import { useRef } from 'react'
import { X } from 'lucide-react'

type ZoomableFigureProps = {
  src: string
  alt: string
  width?: number
  height?: number
  caption?: ReactNode
  className?: string
  priority?: boolean
}

export function ZoomableFigure({ src, alt, width, height, caption, className, priority }: ZoomableFigureProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const close = () => dialogRef.current?.close()

  return (
    <figure className={className}>
      <button type="button" className="zoom-trigger" onClick={() => dialogRef.current?.showModal()}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
        />
        <span className="zoom-hint" aria-hidden="true">View larger</span>
      </button>
      {caption ? <figcaption>{caption}</figcaption> : null}
      <dialog
        ref={dialogRef}
        className="zoom-dialog"
        aria-label={`Enlarged image: ${alt}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) close()
        }}
      >
        <div className="zoom-dialog-inner">
          <button type="button" className="zoom-close" onClick={close} aria-label="Close enlarged image">
            <X size={18} aria-hidden="true" />
          </button>
          <img src={src} alt={alt} />
        </div>
      </dialog>
    </figure>
  )
}
