"use client"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CalendarDays, Clock, Globe2, Stethoscope, Heart, GraduationCap, Trophy, Target, ShieldCheck, BrainCircuit, Users, TrendingUp } from 'lucide-react'
import Link from "next/link"
import type { Metadata } from 'next'
 
export  default function LandingPage2() {
  // Adicionar estado para armazenar os corações
  const [hearts, setHearts] = useState<number[]>([])

  // Adicionar estados para os campos do formulário
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function validateForm(): boolean {
    if (fullname.trim() === '' || email.trim() === '') {
      alert('Preencha todos os campos obrigatórios.');
      return false;
    }
    return true;
  }

  useEffect(() => {
    // Gerar corações após a montagem
    const heartArray = Array.from({ length: 24 }, (_, i) => i)
    setHearts(heartArray)

    const form = document.getElementById('form_1') as HTMLFormElement;
    const phoneInput = document.getElementById('phone') as HTMLInputElement;

    const formatPhone = (value: string): string => {
      value = value.replace(/\D/g, '');
      value = value.substring(0, 11);

      if (value.length > 0) {
        value = '(' + value;
      }
      if (value.length > 2) {
        value = value.slice(0, 3) + ') ' + value.slice(3);
      }
      if (value.length > 8) {
        value = value.slice(0, 10) + '-' + value.slice(10);
      }

      return value;
    };

    const handlePhoneInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      target.value = formatPhone(target.value);
    };

    const handlePhoneKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === 'Backspace' || 'Delete') {
        const target = e.target as HTMLInputElement;
        target.value = target.value.replace(/\D/g, '');
      }
    };

    return () => {
    };
  }, [fullname, email, phone]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    const data = {
      submission_date: new Date().toISOString(),
      nome_formulario: 'funil_call_Protocolo-Madrid',
      'Página de Captura': window.location.pathname.replace(/^\/|\/$/g, ''),
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
      utm_content: new URLSearchParams(window.location.search).get('utm_content') || '',
      utm_term: new URLSearchParams(window.location.search).get('utm_term') || '',
      phone: `${phone.replace(/\D/g, '')}`,
      fullname,
      email
    };


    fetch('https://n8n.aesmkt.com.br/webhook/lzto-ams-fev25-ads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Webhook disparado com sucesso:', result);
      window.location.href = '/obg';
    })
    .catch(error => {
      console.error('Erro ao disparar o webhook:', error);
    });
  }

  function formatPhone(value: string): string {
    value = value.replace(/\D/g, '');
    value = value.substring(0, 11);

    if (value.length > 0) {
      value = '(' + value;
    }
    if (value.length > 2) {
      value = value.slice(0, 3) + ') ' + value.slice(3);
    }
    if (value.length > 8) {
      value = value.slice(0, 10) + '-' + value.slice(10);
    }

    return value;
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with curved background */}
      <section className="relative bg-[url('/bg-hero.webp')] bg-cover bg-no-repeat pt-12 pb-24">
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-6 gap-8">
              {hearts.map((i) => (
                <Heart key={i} className="w-8 h-8 text-pink-300 transform rotate-45" />
              ))}
            </div>
          </div>
          <div className="container mx-auto relative">
            <Image 
              src="/logo.png"
              alt="Amar Saber Logo"
              width={150}
              height={60}
              className="mx-auto"
            />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-48 text-pink-50 transform -translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 0L100 0C50 0 50 100 0 100Z" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full text-pink-700">
                <Stethoscope className="h-5 w-5" />
                <span className="font-medium">Evento Exclusivo</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Os três passos para você veterinário alcançar os 10 mil reais mensais em até 90 dias:
              </h1>
              <h2 className="text-xl md:text-2xl text-pink-600 font-semibold">
                Os três passos para você veterinário alcançar os 10 mil reais mensais em até 90 dias
              </h2>
              <p className="text-lg text-gray-700">
                Aprenda a construir uma carreira que gere R$10 mil mensais, sem precisar de equipamentos caros ou estrutura de hospital veterinário. Mesmo em cidades pequenas ou com recursos limitados.
              </p>
              
              <Card className="p-6 bg-white border-pink-200 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-pink-700">
                    <CalendarDays className="h-5 w-5" />
                    <span className="font-medium">Data: 04/02</span>
                  </div>
                  <div className="flex items-center gap-2 text-pink-700">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">Horário: 19h</span>
                  </div>
                  <div className="flex items-center gap-2 text-pink-700">
                    <Globe2 className="h-5 w-5" />
                    <span className="font-medium">Formato: Online, ao vivo e gratuito</span>
                  </div>
                </div>
              </Card>

              <form id="form_1" className="space-y-4" onSubmit={handleSubmit}>
                <Input 
                  id="fullname" 
                  type="text" 
                  placeholder="Nome completo" 
                  className="bg-pink-50 border-pink-300 h-12"  
                  required
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="WhatsApp" 
                  className="bg-pink-50 border-pink-300 h-12" 
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="E-mail" 
                  className="bg-pink-50 border-pink-300 h-12" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-lg py-6 shadow-xl hover:shadow-pink-200/50 transition-all">
                  Quero participar agora!
                </Button>
              </form>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-pink-300 rounded-full rounded-bl-xl rounded-br-xl opacity-20"></div>
              <Image
                src="/hero.png"
                alt="Dra. Maria Paula"
                width={500}
                height={500}
                className="mx-auto relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Objections Section with DNA pattern background */}
      <section className="relative py-16 overflow-hidden  bg-pink-50..">

        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12">
            Chega de viver com a 'corda no pescoço'. Muito trabalho e pouco retorno!
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8">
              Você pode construir uma carreira veterinária de sucesso. Nós vamos mostrar como superar:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white/80 backdrop-blur border-pink-200">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-pink-600" />
                  </div>
                  <p className="text-gray-700">A falta de um apoio de quem estava onde você está agora e alcançou o sucesso profissional</p>
                </div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur border-pink-200">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-pink-600" />
                  </div>
                  <p className="text-gray-700">A crença de que o mercado local não valoriza o veterinário</p>
                </div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur border-pink-200">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-pink-600" />
                  </div>
                  <p className="text-gray-700">O medo de investir e não ter retorno</p>
                </div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur border-pink-200">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="w-6 h-6 text-pink-600" />
                  </div>
                  <p className="text-gray-700">A sensação de despreparo ao lidar com casos complexos</p>
                </div>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Link href={'#home'} className="rounded-xl text-white bg-pink-600 hover:bg-pink-700 text-lg py-6 px-8 shadow-xl hover:shadow-pink-200/50 transition-all">
                Quero descobrir como!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section with paw prints */}
      <section className="py-16 container mx-auto px-4 relative">
        <div className="absolute inset-0 overflow-hidden">
          {hearts.map((i) => (
            <Heart
              key={i}
              className="absolute text-pink-100 transform rotate-45"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 20}px`,
                height: `${Math.random() * 20 + 20}px`,
              }}
            />
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center mb-12 relative">
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
          <Link href={'#home'} className="rounded-xl text-white bg-pink-600 hover:bg-pink-700 text-lg py-6 px-8 shadow-xl hover:shadow-pink-200/50 transition-all">
            Quero garantir minha vaga agora!
          </Link>
        </div>
      </section>

      {/* Value Proposition Section with wave pattern */}
      <section className="relative py-16 bg-pink-50">
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12">
            Em uma aula gratuita, você vai descobrir:
          </h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur border-pink-200">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-gray-700">Estratégias práticas para dominar a segurança clínica</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur border-pink-200">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-gray-700">Os passos para alcançar a estabilidade financeira</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur border-pink-200">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-gray-700">Métodos para enfrentar desafios emocionais e evitar burnout</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur border-pink-200">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-gray-700">Como construir autoridade e educar tutores para valorizar seu trabalho</p>
              </div>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link href={'#home'} className="rounded-xl text-white bg-pink-600 hover:bg-pink-700 text-lg py-6 px-8 shadow-xl hover:shadow-pink-200/50 transition-all">
              Quero aprender agora!
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility Section with DNA helix background */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-white"></div>
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
              <h2 className="text-3xl font-bold">Quem será sua mentora?</h2>
              <div className="space-y-4 text-gray-700 mb-12">
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

              <div className="mt-8">
                <Link href={'#home'} className="rounded-xl  text-white bg-pink-600 hover:bg-pink-700 text-lg py-6 px-8 shadow-xl hover:shadow-pink-200/50 transition-all">
                    Quero aprender com a Maria Paula
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}