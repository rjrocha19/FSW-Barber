import Header from './_components/header'
import { Button } from './_components/ui/button'
import Image from 'next/image'
import { db } from './_lib/prisma'
import { BarbershopItem } from './_components/barbershop-item'
import { BookingItem } from './_components/booking-item'
import { quickSearchOptions } from './_constants/search'
import Search from './_components/search'

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc',
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
        <Search />

        {/* quick search */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map(option => (
            <Button key={option.title} variant="secondary" className="gap-2">
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={16}
                height={16}
              />
              <p className="text-sm">{option.title}</p>
            </Button>
          ))}
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
          {barbershops.map(barbershop => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map(barbershop => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </main>
  )
}
