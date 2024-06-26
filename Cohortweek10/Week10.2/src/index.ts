import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstname: string, lastname: string) {
  const res = await prisma.user.create({
    data: {
        email:username,
        password,
        firstname,
        lastname
        },
        select: {
            email: true,
            firstname: true,
            lastname: true
        }
    })
    console.log(res)
}

insertUser("Suryansh", "password", "Suryansh", "Sharma")