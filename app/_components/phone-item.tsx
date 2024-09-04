"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"

interface PhoneItemProps {
  phone: string
}

export function PhoneItem({ phone }: PhoneItemProps) {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
  }
  
  return (
    <div>
      <div className="flex justify-between" key={phone}>
        {/* left */}
        <div className="flex items-center gap-2">
          <SmartphoneIcon />
          <p>{phone}</p>
        </div>
        {/* right */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleCopyPhoneClick(phone)}
        >
          Copiar
        </Button>
      </div>
    </div>
  )
}
