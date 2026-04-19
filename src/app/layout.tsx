import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const averta = localFont({
  src: [
    {
      path: '../../public/font/Averta/Averta-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/font/Averta/Averta-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/Averta/Averta-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-averta',
  display: 'swap',
});

const brixSans = localFont({
  src: [
    {
      path: '../../public/font/Brix Sans/Brix Sans Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Brix Sans/Brix Sans Light.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-brix-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Schaper Media | Media Production",
  description: "Small media production company specializing in high-quality storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${averta.variable} ${brixSans.variable}`}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <main style={{ flex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
