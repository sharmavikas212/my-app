import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import WhyChooseMe from './components/WhyChooseMe'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Industries from './components/Industries'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <WhyChooseMe />
      <Process />
      <Portfolio />
      <Testimonials />
      <Industries />
      <Contact />
      <Footer />
    </div>
  )
}

export default App