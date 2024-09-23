import { BarbershopItem } from '../_components/barbershop-item'
import { db } from '../_lib/prisma'

interface BarbershopItemProps {
  searchParams: {
    search?: string
  }
}

export default async function BarbershopPage({
  searchParams,
}: BarbershopItemProps) {
  const barbershop = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams?.search,
        mode: 'insensitive',
      },
    },
  })
  return (
    <div>
      <h2 className="mb-3 mt-6 text-xs font-bold upercase text-gray-400">
        Resultados para &quot;{searchParams?.search}&quot;
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {barbershop.map(barbershop => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  )
}
