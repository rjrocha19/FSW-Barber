import { SearchIcon } from "lucide-react"
import { Header } from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { db } from "./_lib/prisma"
import { BarbershopItem } from "./_components/barbershop-item"
import { BookingItem } from "./_components/booking-item"
import { Footer } from "./_components/footer"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <main>
      {/* Header */}
      <Header />

      <div className="p-5">
        {/* Text */}
        <h2 className="text-xl font-bold">Olá, Rodolfo!</h2>
        <p>Segunda-feira, 26 de agosto.</p>

        {/* search */}
        <div className="flex flex-row items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." className="rounded-xl" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* quick search */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button variant="secondary" className="gap-2">
            <Image src="/Cabelo.svg" alt="Cabelo" width={16} height={16} />
            <p className="text-sm">Cabelo</p>
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image src="/Barba.svg" alt="Barba" width={16} height={16} />
            <p className="text-sm">Barba</p>
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image
              src="/Acabamento.svg"
              alt="Acabamento"
              width={16}
              height={16}
            />
            <p className="text-sm">Acabamento</p>
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image
              src="/Sobrancelha.svg"
              alt="Sobrancelha"
              width={16}
              height={16}
            />
            <p className="text-sm">Sobrancelha</p>
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image src="/Massagem.svg" alt="Massagem" width={16} height={16} />
            <p className="text-sm">Massagem</p>
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image
              src="/Hidratação.svg"
              alt="Hidratação"
              width={16}
              height={16}
            />
            <p className="text-sm">Hidratação</p>
          </Button>
        </div>

        {/* Image */}
        <div className="relative h-[150px] w-full mt-6">
          <Image
            alt="Agende nos melhores com FWS Barber"
            fill
            src="/banner-01.png"
            className="object-cover rounded-xl"
          />
        </div>

        {/* scheduling */}
        <BookingItem />

        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
