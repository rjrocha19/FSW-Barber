import type { BarbershopService } from "@prisma/client"
import Image from "next/image"

interface ServiceItemProps {
  service: BarbershopService
}

export default function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div className="flex items-center gap-2">
      <Image src={service.imageUrl} alt={service.name} width={16} height={16} />
    </div>
  )
}
