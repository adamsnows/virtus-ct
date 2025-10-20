import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logos_virtus_secundarias-02-Bn6s9RoktvLoDoU6Yt62sZzR4R428g.jpg"
              alt="VIRTUS Cross Training"
              width={200}
              height={67}
              className="mb-4"
            />
            <p className="text-gray-400 leading-relaxed">Democratizando o Cross Training. Todos podem fazer Cross.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-gray-400 hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#treinos" className="text-gray-400 hover:text-primary transition-colors">
                  Treinos
                </Link>
              </li>
              <li>
                <Link href="#horarios" className="text-gray-400 hover:text-primary transition-colors">
                  Horários
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Av. Maria Lacerda Montenegro, 2475</li>
              <li>Nova Parnamirim, Parnamirim - RN</li>
              <li>CEP: 59152-600</li>
              <li>(84) 9999-9999</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Redes Sociais</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VIRTUS Cross Training. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
