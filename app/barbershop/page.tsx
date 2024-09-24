import { BarbershopItem } from '../_components/barbershop-item'
import Header from '../_components/header'
import Search from '../_components/search'
import { db } from '../_lib/prisma'

interface BarbershopItemProps {
  searchParams: {
    title?: string
    services?: string
  }
}

export default async function BarbershopPage({
  searchParams,
}: BarbershopItemProps) {
  const barbershop = await db.barbershop.findMany({
    where: {
      OR: [
        searchParams.title
          ? {
            name: {
              contains: searchParams?.title,
              mode: 'insensitive',
            },
          }
          : {},
        searchParams.services
          ? {
            services: {
              some: {
                name: {
                  contains: searchParams?.services,
                  mode: 'insensitive',
                },
              },
            },
          }
          : {},
      ],
    },
  })
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold upercase text-gray-400">
          Resultados para &quot;{searchParams?.title || searchParams?.services}&quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barbershop.map(barbershop => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}
