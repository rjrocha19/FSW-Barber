import { MenuIcon } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SiderbarSheet from "./siderbar-sheet"

export default function Header() {
  return (
    <Card>
      <CardContent className="p-5 flex flex-row items-center justify-between">
        <Image alt="FSW Barber" src="/logo.svg" width={120} height={18} />
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SiderbarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}
