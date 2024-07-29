"use client"

import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Popular from './components/Popular'
import Accordian from "./components/Accordian"
import Reviews from "./components/Reviews"
import { StoreProvider } from "easy-peasy"
import store from '../context/store'
import Locations from "./components/Locations"

export default function Home() {
  return (
    <main>
      <StoreProvider store={store}>
        <Nav/>
        <Hero
        title="Rental motors at great prices"
        subtitle="Rent starting from 1 day for as low as £39.99"
        image="/rental-car.jpg"
        ctaText="Learn More"
        ctaUrl="/about"
        />
      <Popular/>
      <Locations/>
      <Reviews limit={5}/>
      <Accordian/>
        </StoreProvider>
        
    </main>
  )
}


