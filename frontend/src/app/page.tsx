import About from '@/components/sections/About'
import WhatWeDo from '@/components/sections/WhatWeDo'
import HowWeOperate from '@/components/sections/HowWeOperate'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <About />
      <WhatWeDo />
      <HowWeOperate />
      <Footer />
    </main>
  )
}
