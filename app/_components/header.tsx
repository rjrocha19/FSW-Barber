import { MenuIcon } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <Card>
      <CardContent>
        <Image alt="FSW Barber" src="/logo.svg" width={120} height={18} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
