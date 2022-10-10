import prisma from "../src/database/prisma";
import { groups, categories, stickers, users } from "./data";

async function main() {
    await prisma.$executeRaw`TRUNCATE TABLE groups RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;

    await prisma.group.createMany({
        data: groups,
    });

    await prisma.category.createMany({
        data: categories,
    });

    await prisma.sticker.createMany({
        data: stickers,
    });

    await prisma.user.createMany({
        data: users,
    });
}

main()
    .catch((e) => {
        console.log(e);
        process.exit(1);
    })
    .finally(() => {
        prisma.$disconnect();
    });
