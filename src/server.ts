import fastify from "fastify"
import { z } from "zod"
import { PrismaClient } from "@prisma/client"

const app = fastify()

const prisma = new PrismaClient({
  log: ["query"],
})

app.post("/create/user", async (request, reply) => {
  const createUserSchema = z.object({
    name: z.string(),
    dateBirthday: z.string(),
    login: z.string(),
    password: z.string().length(8),
  })

  const data = createUserSchema.parse(request.body)

  await prisma.user.create({
    data: {
      name: data.name,
      dateBirthday: data.dateBirthday,
      login: data.login,
      password: data.password,
    },
  })

  return "cadastro feito com sucesso"
})

app.listen({ port: 3333 }).then(() => {
  console.log("Http server running")
})
