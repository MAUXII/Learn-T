import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import PrelineScript from "./components/PrelineScript";

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LearnIT',
  description: 'Plataforma de Inglês LeaarnIT para todos menos aqueles que não querem evoluir!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${urbanist.className}  background transition-colors`}>
        {children} 
      </body>
      <PrelineScript />
    </html>
  )
}
