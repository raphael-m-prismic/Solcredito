import './globals.css'

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import { Source_Sans_3 } from 'next/font/google'
import Header from '@/components/Header';

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSans.className}>
      <body>
        <Header />
        <main className='main'>{children}</main>
      </body>
        <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
