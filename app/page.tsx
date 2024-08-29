import { EyeIcon, FootprintsIcon, SearchIcon } from "lucide-react"
import { Header } from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import { BarbershopItem } from "./_components/barbershop-item"

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
            <FootprintsIcon size={16} />
            <p className="text-sm">Pezinho</p>
          </Button>

          <Button variant="secondary" className="gap-2">
            <EyeIcon size={16} />
            <p className="text-sm">Sombrancelha</p>
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
        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* Left */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>

              <div className="flex item-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Vintage Barber</p>
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-col justify-center items-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">26</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

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

      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2023 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </main>
  )
}
