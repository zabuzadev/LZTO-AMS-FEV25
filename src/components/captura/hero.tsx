import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CalendarDays, Clock, Globe2, Heart, Stethoscope } from "lucide-react";
import { Card } from "../ui/card";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
}

export default function Hero({ title }: HeroProps) {
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
        <section className="relative bg-[url('/bg-hero.webp')] bg-cover bg-no-repeat pt-2 pb-8">
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
                {title}
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
    )
}