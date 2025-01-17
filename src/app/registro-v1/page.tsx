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
            title={
              <>
                Os <span className="text-pink-600 font-bold">três pilares</span> para você se tornar um <span className="text-pink-600 font-bold">veterinário</span> confiante, reconhecido e <span className="text-pink-600 font-bold">financeiramente estável</span>
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