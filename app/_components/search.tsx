"use client"

import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
  const [search, setSearch] = useState("")

  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/barbershop?search=${search}`)
  }
  return (
    <form className="flex flex-row items-center gap-2 mt-6" onSubmit={handleSubmit}>
      <Input
        placeholder="Faça sua busca..."
        className="rounded-xl"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit">
        <SearchIcon />
      </Button>
    </form>
  )
}