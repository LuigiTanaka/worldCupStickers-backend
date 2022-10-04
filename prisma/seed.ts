import prisma from "../src/database/prisma";

async function main() {
    const groups = [{ name: "A" }];
    const categories = [
        { name: "Qatar", groupId: 1 },
        { name: "Ecuador", groupId: 1 },
        { name: "Senegal", groupId: 1 },
        { name: "Netherlands", groupId: 1 },
    ];
    const stickers = ["QAT", "ECU", "SEN", "NED"];

    groups.map(async (group) => {
        await prisma.group.upsert({
            where: { name: group.name },
            update: {},
            create: { name: group.name },
        });
    });

    categories.map(async (category) => {
        await prisma.category.upsert({
            where: { name: category.name },
            update: {},
            create: category,
        });
    });

    stickers.map(async (stickerName, index) => {
        for (let i = 1; i <= 20; i++) {
            await prisma.sticker.upsert({
                where: { name: stickerName, number: i },
                update: {},
                create: {
                    name: stickerName,
                    number: i,
                    categoryId: index,
                },
            });
        }
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
