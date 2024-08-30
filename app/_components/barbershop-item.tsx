import type { Barbershop } from "@prisma/client"

import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

import { StarIcon } from "lucide-react"

import Link from "next/link"
import Image from "next/image"

interface BarbershopItemProps {
  barbershop: Barbershop
}

export function BarbershopItem({ barbershop }: BarbershopItemProps) {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        {/* image */}
        <div className="relative h-[159px] w-full">
          <Image
            alt={barbershop.name}
            fill
            src={barbershop.imageUrl}
            className="object-cover rounded-xl"
          />

          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs text-gray-400 font-semibold">5,0</p>
          </Badge>
        </div>

        {/* text */}
        <div className="px-2 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
          <Button variant="secondary" className="w-full mt-3 ">
            <Link href={`/barbershop/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
