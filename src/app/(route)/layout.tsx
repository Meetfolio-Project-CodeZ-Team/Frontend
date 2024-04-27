import type { Metadata } from 'next'
import RecoilProvider from '../context/RecoilProvider'
import '../ui/globals.css'

export const metadata: Metadata = {
  title: 'MeetFolio',
  description: 'Manage your own Personal Statement!',
  icons: {
    icon: '/Icons/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-[#DEE5ED] h-screen min-w-[850px] mx-auto">
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  )
}
