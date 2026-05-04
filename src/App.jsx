import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Process from './components/Process'
import Products from './components/Products'
import OrderCTA from './components/OrderCTA'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <div className="min-h-screen bg-soap-cream">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Products />
        <OrderCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
