import { Facebook, Instagram, Music2, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-950">
        <div className="container mx-auto py-8 px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center">
                    <Image src="/logo_white.png" alt="Amar Saber" width={80} height={80} />
                </div>
                <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
                    <a href="https://www.instagram.com/mariapaulafvet" target="_blank" rel="noreferrer" className="text-white hover:text-red-500 transition-colors duration-300 ml-4">
                    <Instagram size={24} />
                    </a>
                    <a href="https://www.tiktok.com/@mariapaulafvet" target="_blank" rel="noreferrer" className="text-white hover:text-slate-500 transition-colors duration-300 ml-4">
                    <Music2 size={24} />
                    </a>
                </div>
                <span>
                    <small className="text-gray-500">© 2025 Amar Saber. Todos os direitos reservados.</small>
                </span>
            </div>
        </div>
        </footer>
    );
}
