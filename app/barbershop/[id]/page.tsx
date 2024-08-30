import { db } from "@/app/_lib/prisma"
import Image from "next/image"

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
  })
  return (
    <div>
      {/* Image */}
      <div className="relative h-[250px] w-full">
        <Image src={barbershop.imageUrl} alt={barbershop.name} fill />
      </div>
    </div>
  )
}
