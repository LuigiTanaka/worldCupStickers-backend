import { StickerUser } from "@prisma/client";

export type IStickerUserType = Omit<StickerUser, "id" | "quantity">;

export interface IStickerWithQuantityType {
    id: number;
    name: string;
    categoryId: number;
    quantity: number;
}

export interface IQuantityType {
    quantity: number;
}

export interface IIdType {
    id: number;
}
