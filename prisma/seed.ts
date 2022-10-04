import prisma from "../src/database/prisma";
import { groups, categories, stickers } from "./data";

async function main() {
    await prisma.$executeRaw`TRUNCATE TABLE groups RESTART IDENTITY CASCADE`;

    await prisma.group.createMany({
        data: groups,
    });

    await prisma.category.createMany({
        data: categories,
    });

    await prisma.sticker.createMany({
        data: stickers,
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
