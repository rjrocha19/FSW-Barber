import { Footer } from "@/app/_components/footer"
import ServiceItem from "@/app/_components/service-item"
import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopItemProps {
  params: {
    id: string
  }
}

export default async function BarbershopPage({ params }: BarbershopItemProps) {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound
  }
  return (
    <div>
      {/* Image */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="object-cover object-center"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>

      {/* title */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-1">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 (499 avaliações)</p>
        </div>
      </div>

      {/* Description */}
      <div className="border-b border-solid p-5 space-y-2">
        <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
        <p className="text-sm text-gray-40 text-justify">
          {barbershop?.description}
        </p>
      </div>

      {/* Services */}
      <div className="sapce-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold uppercase text-gray-400 mb-5">
          Serviços
        </h2>
        <div className="space-y-4">
          {barbershop.services.map((services) => (
            <ServiceItem key={services.id} service={services} />
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="p-5">
        {barbershop.phones.map((phone) => (
          <div className="flex justify-between" key={phone}>
            {/* left */}
            {/* right */}
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
