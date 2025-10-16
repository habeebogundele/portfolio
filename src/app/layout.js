import { Inter } from 'next/font/google'
import './globals.css'
import { MobileNavigationProvider } from './contexts/MobileNavigationContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fullstack Developer | MERN Stack, React Native, PHP, Laravel & Website Builders',
  description: 'Professional Fullstack Developer specializing in MERN Stack, React Native, PHP, Laravel, WordPress, Shopify, and Wix. Let\'s build something amazing together.',
  keywords: 'Fullstack Developer, MERN Stack, React Native, PHP, Laravel, WordPress, Shopify, Wix, Next.js, Web Development',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Fullstack Developer & CMS Specialist',
    description: 'MERN Stack, React Native, PHP, Laravel, WordPress, Shopify & Wix Developer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fullstack Developer & CMS Specialist',
    description: 'MERN Stack, React Native, PHP, Laravel, WordPress, Shopify & Wix Developer',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileNavigationProvider>
          {children}
        </MobileNavigationProvider>
      </body>
    </html>
  )
}






// import { Inter } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Fullstack Developer | MERN Stack, React Native, PHP, Laravel & Website Builders',
//   description: 'Professional Fullstack Developer specializing in MERN Stack, React Native, PHP, Laravel, WordPress, Shopify, and Wix. Let\'s build something amazing together.',
//   keywords: 'Fullstack Developer, MERN Stack, React Native, PHP, Laravel, WordPress, Shopify, Wix, Next.js, Web Development',
//   authors: [{ name: 'Your Name' }],
//   openGraph: {
//     title: 'Fullstack Developer & CMS Specialist',
//     description: 'MERN Stack, React Native, PHP, Laravel, WordPress, Shopify & Wix Developer',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Fullstack Developer & CMS Specialist',
//     description: 'MERN Stack, React Native, PHP, Laravel, WordPress, Shopify & Wix Developer',
//   },
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {children}
//       </body>
//     </html>
//   )
// }
