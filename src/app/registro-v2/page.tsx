"use client"
import { useState, useEffect } from 'react'
import Hero from "@/components/captura/hero"
import Section2 from "@/components/captura/section2"
import Section3 from "@/components/captura/section3"
import Section4 from "@/components/captura/section4"
import Section5 from "@/components/captura/section5"

export default function LandingPage2() {
  // Adicionar estado para armazenar os corações
  const [hearts, setHearts] = useState<number[]>([])

  useEffect(() => {
    // Gerar corações após a montagem
    const heartArray = Array.from({ length: 24 }, (_, i) => i)
    setHearts(heartArray)
  }
    , [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with curved background */}
      <Hero
        title={
          <>
            Os <span className="text-pink-600 font-bold"> três passos </span> para você <span className="text-pink-600 font-bold"> veterinário </span> alcançar os <span className="text-pink-600 font-bold"> 7 mil </span> reais mensais em até 90 dias
          </>
        }
      />

      {/* Objections Section with DNA pattern background */}
      <Section2 />

      {/* Target Audience Section with paw prints */}
      <Section3 />

      {/* Value Proposition Section with wave pattern */}
      <Section4 />

      {/* Credibility Section */}
      <Section5 />
    </div>
  )
}