import { Sticker } from "@prisma/client";
type IStickerType = Omit<Sticker, "id">;

//groups
const groups = [{ name: "Group A" }, { name: "Group B" }];

//categories
const categories = [
    { name: "Qatar", groupId: 1 },
    { name: "Ecuador", groupId: 1 },
    { name: "Senegal", groupId: 1 },
    { name: "Netherlands", groupId: 1 },
    { name: "England", groupId: 2 },
    { name: "IR Iran", groupId: 2 },
    { name: "USA", groupId: 2 },
    { name: "Wales", groupId: 2 },
];

//stickers
const stickers: IStickerType[] = [];
const names = ["QAT", "ECU", "SEN", "NED", "ENG", "IRN", "USA", "WAL"];
names.forEach((name, index) => {
    for (let i = 1; i <= 20; i++) {
        stickers.push({
            name: `${name} ${i}`,
            categoryId: index + 1,
        });
    }
});

export { stickers, categories, groups };
