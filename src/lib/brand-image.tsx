import { ImageResponse } from 'next/og'
import { BRAND_IMAGE_SIZE } from '@/lib/brand'

export const brandImageContentType = 'image/png'

export function createBrandImageResponse() {
  return new ImageResponse(
    <div
      style={{
        background: '#171717',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 240,
          height: 240,
          borderRadius: 48,
          background: '#171717',
          color: '#fafafa',
          fontSize: 112,
          fontWeight: 600,
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '-0.02em',
        }}
      >
        SK
      </div>
    </div>,
    {
      ...BRAND_IMAGE_SIZE,
    },
  )
}
