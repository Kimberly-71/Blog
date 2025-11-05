import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default function (req) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || "Ricer's Blog";
    return new ImageResponse(
      (
        <div style={{
          background: 'linear-gradient(135deg,#0f1724,#071028)',
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          fontFamily: 'Inter, sans-serif'
        }}>
          <div style={{ fontSize: 48, fontWeight: 700 }}>🧠 Ricer's Blog</div>
          <div style={{ fontSize: 36, marginTop: 18 }}>{title}</div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch (e) {
    return new Response('Failed to generate image', { status: 500 });
  }
}
