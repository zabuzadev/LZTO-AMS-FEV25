import { Card } from "@/components/ui/card";
import { CalendarDays, Clock, Globe2, Heart, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ObgPage() {
    return (
        <section className="relative bg-gradient-to-t from-violet-900 to-violet-950 pt-12 pb-24 min-h-screen flex justify-center items-center ">

            <div className="container mx-auto px-4 relative ">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="p-6 bg-white/20 border-none shadow-lg">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full text-pink-700">
                            <Stethoscope className="h-5 w-5" />
                            <span className="font-medium">Você esta dentro!</span>
                        </div>
                            <Image
                                src="./logo_white.png"
                                alt="Amar Saber Logo"
                                width={150}
                                height={60}
                                className="mx-auto"
                            />
                        <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold text-gray-100 leading-tight">
                            Parabéns! Você acaba de dar um grande passo na sua jornada como veterinário.
                        </h1>
                        <h2 className="text-xl md:text-lg text-pink-100 font-semibold">
                            O nosso evento exclusivo vai <span className="text-pink-500">ensinar</span> você construir uma carreira que gere R$10 mil
                             mensais, sem precisar de equipamentos caros ou estrutura de hospital
                              veterinário. Mesmo em cidades pequenas ou com recursos limitados. 
                              Para finalizar sua participação, <span className="text-pink-500">entre agora</span> mesmo para o grupo 
                              <span className="text-pink-500">exclusivo do WhatsApp.</span>
                        </h2>

                        <Link href="https://chat.whatsapp.com/" className="inline-block bg-pink-500 hover:bg-pink-600 text-white w-full text-center px-6 py-3 rounded-lg font-bold text-xl">
                            Quero fazer parte do grupo especial
                        </Link>
                            
                        <p className="text-lg text-gray-50 font-medium">
                            O grupo é a forma mais segura de garantir que você 
                            <span className="text-pink-500"> receberá o link da aula e todos os materiais exclusivos que preparamos.</span>
                        </p>
                        <p className="text-lg text-gray-50 font-medium">
                             tranquilo, o grupo é silencioso e seguro. Apenas nossa equipe vai mandar mensagem.

                        </p>


                    </div>
                </Card>

                    <div className="relative ">
                        <Image
                            src="./obg.png"
                            alt="Dra. Maria Paula"
                            width={500}
                            height={400}
                            className="mx-auto relative"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}