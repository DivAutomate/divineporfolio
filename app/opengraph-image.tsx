import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Divine Jude — work off your plate, systems in place'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const [manropeMedium, manropeBold, serifItalic] = await Promise.all([
    readFile(join(process.cwd(), 'app/fonts/og/manrope-500.woff')),
    readFile(join(process.cwd(), 'app/fonts/og/manrope-800.woff')),
    readFile(join(process.cwd(), 'app/fonts/og/instrument-serif-italic.woff')),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '56px 64px 52px',
          background: '#f4f3ef',
          color: '#171817',
          fontFamily: 'Manrope',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', fontSize: 26, fontWeight: 800, letterSpacing: -1 }}>
            Divine Jude
            <span style={{ color: '#4a7410' }}>.</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 1.6,
              textTransform: 'uppercase',
              color: '#5f615b',
            }}
          >
            Virtual assistant · Operations partner
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #171817', paddingTop: 40 }}>
          <div style={{ display: 'flex', fontSize: 88, fontWeight: 500, lineHeight: 1.02, letterSpacing: -4.5 }}>
            Work off your plate.
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Instrument Serif',
              fontStyle: 'italic',
              fontSize: 96,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            Systems in place.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #d9d9d2',
            paddingTop: 24,
          }}
        >
          <div style={{ display: 'flex', fontSize: 22, fontWeight: 600, letterSpacing: -0.4 }}>
            divinejude.vercel.app
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 1.4,
              textTransform: 'uppercase',
              color: '#5f615b',
            }}
          >
            <div style={{ display: 'flex', background: '#d3f36b', borderRadius: 999, padding: '8px 16px', color: '#142009' }}>
              Executive support
            </div>
            <div style={{ display: 'flex', background: '#ebeae4', borderRadius: 999, padding: '8px 16px' }}>
              Project coordination
            </div>
            <div style={{ display: 'flex', background: '#ebeae4', borderRadius: 999, padding: '8px 16px' }}>
              Lead generation
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Manrope', data: manropeMedium, style: 'normal', weight: 500 },
        { name: 'Manrope', data: manropeBold, style: 'normal', weight: 800 },
        { name: 'Instrument Serif', data: serifItalic, style: 'italic', weight: 400 },
      ],
    },
  )
}
