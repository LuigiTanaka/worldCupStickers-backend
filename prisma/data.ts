import { Sticker } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
type IStickerType = Omit<Sticker, "id">;

dotenv.config();

//groups
const groups = [
    { name: "Specials" },
    { name: "Group A" },
    { name: "Group B" },
    { name: "Group C" },
    { name: "Group D" },
    { name: "Group E" },
    { name: "Group F" },
    { name: "Group G" },
    { name: "Group H" },
];

//categories
const categories = [
    { name: "Home Page", groupId: 1 },
    { name: "Stadiums", groupId: 1 },
    { name: "FIFA Museum", groupId: 1 },
    { name: "Coca-Cola", groupId: 1 },
    { name: "Qatar", groupId: 2 },
    { name: "Ecuador", groupId: 2 },
    { name: "Senegal", groupId: 2 },
    { name: "Netherlands", groupId: 2 },
    { name: "England", groupId: 3 },
    { name: "IR Iran", groupId: 3 },
    { name: "USA", groupId: 3 },
    { name: "Wales", groupId: 3 },
    { name: "Argentina", groupId: 4 },
    { name: "Saudi Arabia", groupId: 4 },
    { name: "Mexico", groupId: 4 },
    { name: "Poland", groupId: 4 },
    { name: "France", groupId: 5 },
    { name: "Australia", groupId: 5 },
    { name: "Denmark", groupId: 5 },
    { name: "Tunisia", groupId: 5 },
    { name: "Spain", groupId: 6 },
    { name: "Costa Rica", groupId: 6 },
    { name: "Germany", groupId: 6 },
    { name: "Japan", groupId: 6 },
    { name: "Belgium", groupId: 7 },
    { name: "Canada", groupId: 7 },
    { name: "Marroco", groupId: 7 },
    { name: "Croatia", groupId: 7 },
    { name: "Brazil", groupId: 8 },
    { name: "Serbia", groupId: 8 },
    { name: "Switzerland", groupId: 8 },
    { name: "Cameroon", groupId: 8 },
    { name: "Portugal", groupId: 9 },
    { name: "Ghana", groupId: 9 },
    { name: "Uruguay", groupId: 9 },
    { name: "Korea Republic", groupId: 9 },
];

//stickers
const stickers: IStickerType[] = [
    { name: "00", categoryId: 1 },
    { name: "FWC 1", categoryId: 1 },
    { name: "FWC 2", categoryId: 1 },
    { name: "FWC 3", categoryId: 1 },
    { name: "FWC 4", categoryId: 1 },
    { name: "FWC 5", categoryId: 1 },
    { name: "FWC 6", categoryId: 1 },
    { name: "FWC 7", categoryId: 1 },
    { name: "FWC 8", categoryId: 2 },
    { name: "FWC 9", categoryId: 2 },
    { name: "FWC 10", categoryId: 2 },
    { name: "FWC 11", categoryId: 2 },
    { name: "FWC 12", categoryId: 2 },
    { name: "FWC 13", categoryId: 2 },
    { name: "FWC 14", categoryId: 2 },
    { name: "FWC 15", categoryId: 2 },
    { name: "FWC 16", categoryId: 2 },
    { name: "FWC 17", categoryId: 2 },
    { name: "FWC 18", categoryId: 2 },
    { name: "FWC 19", categoryId: 3 },
    { name: "FWC 20", categoryId: 3 },
    { name: "FWC 21", categoryId: 3 },
    { name: "FWC 22", categoryId: 3 },
    { name: "FWC 23", categoryId: 3 },
    { name: "FWC 24", categoryId: 3 },
    { name: "FWC 25", categoryId: 3 },
    { name: "FWC 26", categoryId: 3 },
    { name: "FWC 27", categoryId: 3 },
    { name: "FWC 28", categoryId: 3 },
    { name: "FWC 29", categoryId: 3 },
    { name: "C1", categoryId: 4 },
    { name: "C2", categoryId: 4 },
    { name: "C3", categoryId: 4 },
    { name: "C4", categoryId: 4 },
    { name: "C5", categoryId: 4 },
    { name: "C6", categoryId: 4 },
    { name: "C7", categoryId: 4 },
    { name: "C8", categoryId: 4 },
];
const names = [
    "QAT",
    "ECU",
    "SEN",
    "NED",
    "ENG",
    "IRN",
    "USA",
    "WAL",
    "ARG",
    "KSA",
    "MEX",
    "POL",
    "FRA",
    "AUS",
    "DEN",
    "TUN",
    "ESP",
    "CRC",
    "GER",
    "JPN",
    "BEL",
    "CAN",
    "MAR",
    "CRO",
    "BRA",
    "SRB",
    "SUI",
    "CMR",
    "POR",
    "GHA",
    "URU",
    "KOR",
];
names.forEach((name, index) => {
    for (let i = 1; i <= 20; i++) {
        stickers.push({
            name: `${name} ${i}`,
            categoryId: index + 5,
        });
    }
});

//users
const user = {
    username: "test",
    email: "test@gmail.com",
    password: "test123",
};

const SALT = Number(process.env.SALT) || 10;
const passwordHash = bcrypt.hashSync(user.password, SALT);

const userData = {
    username: user.username,
    email: user.email,
    password: passwordHash,
};

const users = [userData];

export { stickers, categories, groups, users };
