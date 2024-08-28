import type { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

interface BarbershopItemProps {
  barbershop: Barbershop
}

export function BarbershopItem({ barbershop }: BarbershopItemProps) {
  return (
    <Card className="min-w-[159px]">
      <CardContent className="p-0">
        {/* image */}
        <div className="relative h-[159px] w-full">
          <Image
            alt={barbershop.name}
            fill
            src={barbershop.imageUrl}
            className="object-cover rounded-xl"
          />
        </div>
      </CardContent>
    </Card>
  )
}
