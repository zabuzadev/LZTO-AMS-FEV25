import { Heart } from "lucide-react";
import { Card } from "../ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Section3() {
      // Adicionar estado para armazenar os corações
    const [hearts, setHearts] = useState<number[]>([])

    useEffect(() => {
        // Gerar corações após a montagem
        const heartArray = Array.from({ length: 24 }, (_, i) => i)
        setHearts(heartArray)
    }
    , [])

    return (
        <section className=" relative bg-[#22001B]">
        <div className="absolute inset-0 overflow-hidden">
          {hearts.map((i) => (
            <Heart
              key={i}
              className="absolute text-pink-100/50 transform rotate-45"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 20}px`,
                height: `${Math.random() * 20 + 20}px`,
              }}
            />
          ))}
        </div>
       <div className="py-16 container mx-auto px-4">
       <h2 className="text-5xl font-bold text-center mb-12 relative text-pink-50">
          Para quem é este evento?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          <Card className="p-6 space-y-4 bg-gradient-to-br from-white to-pink-50 border-pink-200">
            <div className="w-60 md:w-40 lg:w-60 h-40 flex items-center justify-center mb-4">
              <Image src={"/homemtrite.png"} alt="homem contando dinheiro e vendo contas trsite" width={300} height={100} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-pink-600">
              Veterinários que não conquistaram estabilidade financeira
            </h3>
            <p className="text-gray-700">
              Se a sua carreira parece estagnada e você não consegue atingir o faturamento esperado, aprender as estratégias certas pode ser o passo que falta para alcançar a estabilidade financeira e o reconhecimento que você merece.
            </p>
          </Card>
          
          <Card className="p-6 space-y-4 bg-gradient-to-br from-white to-pink-50 border-pink-200">
          <div className="w-60 md:w-40 lg:w-60 h-40 flex items-center justify-center mb-4">
              <Image src={"/mulherPreocupadaEstudando.png"} alt="mulher triste estudadndo angustiada " width={150} height={100} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-pink-600">
              Estudantes próximos de se formar
            </h3>
            <p className="text-gray-700">
              Se você está no final da graduação e quer se preparar melhor para o mercado, aprender técnicas práticas e estratégias de posicionamento antes de enfrentar os desafios reais da profissão, este evento é para você.
            </p>
          </Card>
          
          <Card className="p-6 space-y-4 bg-gradient-to-br from-white to-pink-50 border-pink-200">
          <div className="w-60 md:w-40 lg:w-72 h-48 flex items-center justify-center mb-4">
              <Image src={"/mulherCaidaNoChaoPreocupada.png"} alt="mulher triste no chão " width={300} height={100} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-pink-600">
              Veterinários já formados, mas inseguros
            </h3>
            <p className="text-gray-700">
              Para aqueles que, mesmo com diploma, ainda sentem que falta confiança para realizar procedimentos, atender clientes ou gerenciar uma clínica com segurança.
            </p>
          </Card>
        </div>
        <div className="text-center mt-12 relative">
          <Link href={'#home'} className="rounded-xl text-white bg-pink-600 hover:bg-pink-700 text-lg py-6 px-8 shadow-xl hover:shadow-pink-900/50 transition-all">
            Quero garantir minha vaga agora
          </Link>
        </div>
       </div>
      </section>
    );
}