import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "포트폴리오",
  description: "개인 포트폴리오 웹사이트",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark" suppressHydrationWarning>
      <body className="overflow-y-scroll">{children}</body>
    </html>
  )
}
