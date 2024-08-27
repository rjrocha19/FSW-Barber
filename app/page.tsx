import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Rodolfo!</h2>
        <p>Segunda-feira, 26 de agosto.</p>

        <div className="flex flex-row items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative h-[150px] w-full mt-6">
          <Image
            alt="Agende nos melhores com FWS Barber"
            fill
            src="/banner-01.png"
            className="object-cover rounded-xl"
          />
        </div>

      </div>
    </main>
  )
}
