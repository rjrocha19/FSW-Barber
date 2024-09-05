import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { quickSearchOptions } from "./search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

export default function SiderbarSheet() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>
      <div className="flex flex-row items-center justify-between border-b border-solid gap-3 py-5">
        <h2 className="text-lg font-bold">Olá, faça login!</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="icon">
              <LogInIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[]">
            <DialogHeader>
              <DialogTitle>Faça login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google
              </DialogDescription>
            </DialogHeader>

            <Button variant="outline" className="flex items-center gap-2">
              <Image
                src="/GoogleIcon.svg"
                alt="Google"
                width={18}
                height={18}
              />
              <p>Google</p>
            </Button>
          </DialogContent>
        </Dialog>
        {/* 
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/49602562?v=4&size=64"></AvatarImage>
        </Avatar>

        <div>
          <p className="font-bold">Rodolfo Rocha</p>
          <p className="text-xs">rodolforocha@fsw-barber.com</p>
        </div>
       */}
      </div>
      {/* Menu */}
      <div className="flex flex-col gap-1 py-5 border-b border-solid">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Home
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamento
        </Button>
      </div>

      <div className="flex flex-col gap-1 py-5 border-b border-solid">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              src={option.imageUrl}
              alt={option.title}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-1 py-5">
        <Button variant="ghost" className="justify-start gap-2">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}
