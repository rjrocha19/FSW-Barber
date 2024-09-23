import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-unused-vars
  var cahcedPrisma: PrismaClient
}

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cahcedPrisma) {
    global.cahcedPrisma = new PrismaClient()
  }
  prisma = global.cahcedPrisma
}

export const db = prisma
