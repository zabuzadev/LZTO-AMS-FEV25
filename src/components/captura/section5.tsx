import { Heart } from "lucide-react";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Section5() {
    return (
        <section className="py-16 relative overflow-hidden bg-gradient-to-t from-[#6E0D42] to-[#702041]">
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-pink-300 rounded-full rounded-br-lg rounded-bl-xl opacity-20  shadow-lg"></div>
              <Image
                src="/suaMentora.png"
                alt="Dra. Maria Paula"
                width={400}
                height={500}
                className="mx-auto relative rounded-lg "
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full text-pink-700 mb-4">
                <Heart className="h-5 w-5" />
                <span className="font-medium">Sua Mentora</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Quem será sua mentora?</h2>
              <div className="space-y-4 text-gray-100 mb-12">
                <p>
                  Drª. Maria Paula começou sua carreira enfrentando os mesmos desafios que muitos veterinários vivem hoje. Durante a graduação, sentiu a lacuna entre o ensino teórico e a realidade prática do mercado.
                </p>
                <p>
                  É uma profissional apaixonada por transformar carreiras veterinárias. Com experiência prática e técnica, ela é a fundadora do Formação Amar Saber, criado para ajudar veterinários recém-formados ou estagnados a superarem os desafios do mercado e conquistarem estabilidade financeira.
                </p>
                <Card className="p-6 bg-gradient-to-r  from-pink-50 to-white border-pink-200">
                  <blockquote className="border-l-4 border-pink-600 pl-4 italic">
                    "Eu acredito no potencial de cada veterinário. Com o método certo, você pode transformar sua carreira e atingir o reconhecimento e a estabilidade financeira que merece."
                    <footer className="text-pink-600 font-medium mt-2">— Maria Paula</footer>
                  </blockquote>
                </Card>
              </div>

              <div className="pt-5">
                <Link href={'#home'} className="rounded-xl  text-white bg-pink-600 hover:bg-pink-700 text-lg py-6 px-8 shadow-xl hover:shadow-pink-900/50 transition-all">
                    Quero aprender com a Maria Paula
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}