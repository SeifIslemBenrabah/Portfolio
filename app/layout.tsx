import type { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import './globals.css';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/Portfolio';

export const metadata: Metadata = {
  title: 'Seif Islem Benrabah | Creative Designer & Developer',
  description: 'Seif Islem Benrabah — Creative Designer & Developer portfolio. UI/UX design, branding, and web development.',
  icons: { icon: `${basePath}/favicon.svg` },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFFFF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@400;500;600;700;800;900&family=Funnel+Display:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,700&family=Cairo:wght@400;600;700;900&family=Tajawal:wght@400;500;700;900&display=swap"
        />
      </head>
      <body className="bg-paper text-ink antialiased"><Providers>{children}</Providers></body>
    </html>
  );
}
