import { NextUIProvider } from '@nextui-org/react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import RecoilProvider from '../context/RecoilProvider'

import '../ui/globals.css'

export const metadata: Metadata = {
  title: 'MeetFolio',
  description: 'Manage your own Personal Statement!',
  icons: {
    icon: '/Icons/favicon.ico',
  },
}

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body
        className={`bg-[#DEE5ED] h-screen min-w-[850px] mx-auto ${pretendard.className}`}
      >
        <NextUIProvider>
          <RecoilProvider>{children}</RecoilProvider>
        </NextUIProvider>
      </body>
    </html>
  )
}
