import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const insertData = async (username: string, password: string, firstName: string, lastName: string) => {

    const res = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select: {
            id: true
        }
    })

    console.log(res)
}

// insertData('pandeym891@gmail.com', "mridul ", "Mridul", "Padney")

interface updateData {
    firstName: string,
    lastName: string
}
const updateUser = async (username: string, { firstName, lastName }: updateData) => {

    const res = await prisma.user.update({
        where: {
            email: username
        },
        data: {
            firstName,
            lastName
        }
    })
    console.log(res)
}

// updateUser('pandeym891@gmail.com', {
//     firstName: "Manu",
//     lastName: "Pandey"
// })

const deleteUser = async (username: string) => {

    const res = await prisma.user.delete(
        {
            where: { email: username }
        }
    )
    console.log(res)
}

deleteUser('pandeym891@gmail.com')