import Header from "../components/header"
import HeroSection from "../components/herosection"
import Footer from "../components/Footer/footer"
import Section1 from "../components/AboutComponents/FirstSection"
import Section2 from "../components/AboutComponents/SecondSection"
import Store from "../components/StoreComponents/products"
import Contact from "../components/ContactComponents/ContactSection"

export default function Home() {
  return (

  <div>
    <Header />
    <HeroSection />
    <Section1 />
    <Section2 />
    <Store />
    <Contact />
    <Footer />
  </div>

)}