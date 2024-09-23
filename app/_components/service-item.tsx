import type { BarbershopService } from '@prisma/client'
import Image from 'next/image'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

interface ServiceItemProps {
  service: BarbershopService
}

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3">
        {/* image */}
        <div className="relative h-[110px] w-[110px]">
          <Image
            fill
            src={service.imageUrl}
            alt={service.name}
            className="object-cover rounded-xl  "
          />
        </div>

        {/* right */}
        <div className="space-y-3">
          <h3 className="font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>

          {/* price and button */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(Number(service.price))}
            </p>

            <Button variant="secondary" size="sm">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
