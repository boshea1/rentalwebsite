import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Popular from './components/Popular'
import Accordian from "./components/Accordian"
import Reviews from "./components/Reviews"

export default function Home() {
  return (
    <main>
        <Nav/>
        <Hero
        title="Rental motors at great prices"
        subtitle="Rent starting from 1 day for as low as £39.99"
        image="/rental-car.jpg"
        ctaText="Learn More"
        ctaUrl="/about"
      />
      <Popular/>
      <Reviews limit={5}/>
      <Accordian/>
    </main>
  )
}


