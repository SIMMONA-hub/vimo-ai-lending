import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'VimoAI - Your Intelligent Study Companion',
  description: 'Transform your learning experience with VimoAI, your personalized AI study partner. Smarter studying through emotional intelligence and gamification.',
  keywords: ['AI study companion', 'productivity', 'learning', 'gamification', 'education technology'],
  authors: [{ name: 'VimoAI Team' }],
  openGraph: {
    title: 'VimoAI - Your Intelligent Study Companion',
    description: 'Personalized AI study partner that adapts to your learning style and needs.',
    type: 'website',
    locale: 'en_US',
    url: 'https://vimoai.com',
    images: [
      {
        url: 'https://vimoai.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VimoAI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VimoAI - Your Intelligent Study Companion',
    description: 'Personalized AI study partner that adapts to your learning style and needs.',
    images: ['https://vimoai.com/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: 'index, follow',
  themeColor: '#10b981',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#10b981" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Baloo+2:wght@400..800&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased text-gray-800`}>
        {children}
      </body>
    </html>
  )
} 