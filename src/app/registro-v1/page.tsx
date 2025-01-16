"use client"
import Hero from "@/components/captura/hero"
import Section2 from "@/components/captura/section2"
import Section3 from "@/components/captura/section3"
import Section4 from "@/components/captura/section4"
import Section5 from "@/components/captura/section5"
 
export default function PaginaDeCaptura1() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with curved background */}
      <Hero 
        title=' Os três pilares para você se tornar um veterinário confiante, reconhecido e financeiramente estável'
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