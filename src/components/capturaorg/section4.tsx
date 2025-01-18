import { Heart, Stethoscope, TrendingUp, Users } from "lucide-react";
import { Card } from "../ui/card";
import Link from "next/link";

const items = [
    {
        icon: Stethoscope,
        text: "Estratégias práticas para dominar a segurança clínica"
    },
    {
        icon: TrendingUp,
        text: "Os passos para alcançar a estabilidade financeira"
    },
    {
        icon: Heart,
        text: "Métodos para enfrentar desafios emocionais e evitar burnout"
    },
    {
        icon: Users,
        text: "Como construir autoridade e educar tutores para valorizar seu trabalho"
    }
]

export default function Section4() {
    return (
        <section className="relative py-16 bg-[#22001B]">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-bold text-center mb-12 text-pink-50">
            Em uma <span className="text-pink-600 font-bold">aula gratuita</span>, você vai descobrir:
          </h2>
          <div className="max-w-3xl mx-auto grid  gap-6">
            {items.map((item, i) => (
              <div className="flex justify-center items-center gap-4" key={i}>
                <div className="w-16 h-16 rounded-full bg-pink-700 flex items-center justify-center flex-shrink-0 shadow-md">
                  <item.icon className="w-6 h-6 text-pink-100" />
                </div>
                <Card className="p-6 bg-white/80 backdrop-blur border-pink-200 w-full">
                  <div className="flex gap-4">
                    <p className="text-gray-950">{item.text}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={'#home'} className="rounded-xl text-white bg-pink-600 hover:bg-pink-700 text-lg py-6 px-8 shadow-xl hover:shadow-pink-900/50 transition-all">
              Quero aprender agora
            </Link>
          </div>
        </div>
      </section>
    )
}