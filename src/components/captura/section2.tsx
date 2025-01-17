import { BrainCircuit, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { Card } from "../ui/card";
import Link from "next/link";

const items = [
    {
        icon: Users,
        text: "A falta de um apoio de quem estava onde você está agora e alcançou o sucesso profissional"
    },
    {
        icon: TrendingUp,
        text: "A crença de que o mercado local não valoriza o veterinário"
    },
    {
        icon: ShieldCheck,
        text: "O medo de investir e não ter retorno"
    },
    {
        icon: BrainCircuit,
        text: "A sensação de despreparo ao lidar com casos complexos"
    }
]

export default function Section2() {
    return (
    <section className="relative py-16 overflow-hidden bg-[url('/bg2.webp')] bg-center bg-no-repeat bg-cover text-white bg-[#22001B]">

    <div className="container mx-auto px-4 relative">
    <div className="flex justify-center items-center w-full flex-col">
        <h2 className="text-4xl font-medium text-center mb-12 max-w-[50rem] ">
            Chega de viver com a <span className="text-pink-600 font-bold">'corda no pescoço'</span>. Muito trabalho e pouco retorno!
        </h2>
        <p className="text-lg mb-8">
        Você pode construir uma carreira veterinária de sucesso. Nós vamos mostrar como superar:
        </p>
    </div>
    <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
                <Card key={index} className="p-6 bg-[#22001B]/80 backdrop-blur border-[#AA2E72]">
                    <div className="flex gap-4 items-center justify-center h-full">
                        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-6 h-6 text-[#DB2777]" />
                        </div>
                        <p className="text-gray-100">{item.text}</p>
                    </div>
                </Card>
            ))}
        </div>
        <div className="mt-14 text-center">
        <Link href={'#home'} className="rounded-xl text-white bg-pink-600 hover:bg-pink-700 text-lg py-6 px-8 shadow-xl hover:shadow-pink-900/50 transition-all">
            Quero descobrir como!
        </Link>
        </div>
    </div>
    </div>
    </section>
    )
}