import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Rodolfo!</h2>
        <p>Segunda-feira, 26 de agosto.</p>

        <div className="flex flex-row items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* Image */}
        <div className="relative h-[150px] w-full mt-6">
          <Image
            alt="Agende nos melhores com FWS Barber"
            fill
            src="/banner-01.png"
            className="object-cover rounded-xl"
          />
        </div>

        {/* scheduling */}
        <div>
          <Card className="mt-6">
            <CardContent className="flex justify-between p-0">
              {/* Left */}
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit">Confirmado</Badge>
                <h3 className="font-semibold">Corte de Cabelo</h3>

                <div className="flex item-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                  </Avatar>
                  <p className="text-sm">Vintage Barber</p>
                </div>
              </div>
              {/* Right */}
              <div className="flex flex-col justify-center items-center border-l-2 border-solid px-5">
                <p className="text-sm">Agosto</p>
                <p className="text-2xl">26</p>
                <p className="text-sm">20:00</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
