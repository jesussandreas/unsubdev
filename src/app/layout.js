import './globals.css';
import localFont from 'next/font/local';

const ppNeue = localFont({
  src: [
    {
      path: '../fonts/PPNeueBit-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PPNeueBit-Bold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-ppneue',
  display: 'swap',
});

const sfMono = localFont({
  src: [
    {
      path: '../fonts/SF-Mono-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/SF-Mono-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/SF-Mono-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sfmono',
  display: 'swap',
});

export const metadata = {
  title: 'unsub.dev',
  description:
    'clear out inactive channels and make room for content that actually matters. get back to what you actually want to watch, in one click.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ppNeue.variable} ${sfMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
