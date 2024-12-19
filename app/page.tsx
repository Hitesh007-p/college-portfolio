import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import VideoGallery from '@/components/VideoGallery'
import Principal from '@/components/Principal'
import Teachers from '@/components/Teachers'
import Achievements from '@/components/Achievements'
import Events from '@/components/Events'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Hero />
      <About />
      <Gallery />
      <VideoGallery />
      <Achievements />
      <Principal />
      <Teachers />
      <Events />
      <Newsletter />
      <Footer />
    </main>
  )
}

