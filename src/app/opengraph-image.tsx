import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Emprendimientos Digitales - Soluciones Web y Branding'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#020617', // Slate 950
                    backgroundImage: 'linear-gradient(to bottom right, #020617, #0f172a)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background Grid Accent */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                        maskImage: 'linear-gradient(to bottom, black, transparent)',
                    }}
                />

                {/* Glowing Orb */}
                <div
                    style={{
                        position: 'absolute',
                        width: '600px',
                        height: '600px',
                        background: 'rgba(34, 211, 238, 0.15)', // Cyan
                        filter: 'blur(120px)',
                        borderRadius: '50%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />

                {/* Content Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10,
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '60px 80px',
                        borderRadius: '40px',
                        backgroundColor: 'rgba(15, 23, 42, 0.6)', // Slate 900 / 60%
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    }}
                >
                    {/* Icon/Brand placeholder if needed, using text for reliability */}
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 900,
                            color: 'white',
                            marginBottom: 20,
                            letterSpacing: '-2px',
                            display: 'flex',
                            alignItems: 'center',
                            lineHeight: 1,
                            textTransform: 'uppercase',
                            gap: '20px',
                        }}
                    >
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 20 }}>
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 17L12 22L22 17" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12L12 17L22 12" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        EMPRENDIMIENTOS
                    </div>

                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 900,
                            color: 'transparent',
                            backgroundClip: 'text',
                            backgroundImage: 'linear-gradient(to right, #22d3ee, #3b82f6)', // Cyan to Blue
                            letterSpacing: '-2px',
                            textTransform: 'uppercase',
                            lineHeight: 1,
                            marginBottom: 40,
                        }}
                    >
                        DIGITALES
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '30px',
                        }}
                    >
                        <div style={{ fontSize: 24, color: '#e2e8f0', fontWeight: 600 }}>WEB PROFESIONAL</div>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#64748b' }} />
                        <div style={{ fontSize: 24, color: '#e2e8f0', fontWeight: 600 }}>BRANDING</div>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#64748b' }} />
                        <div style={{ fontSize: 24, color: '#e2e8f0', fontWeight: 600 }}>MARKETING</div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
