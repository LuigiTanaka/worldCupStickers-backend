import { faker } from "@faker-js/faker";

export default function stickerUserFactory() {
    const name = faker.random.alpha(5);
    const categoryId = Number(faker.random.numeric(1));

    return {
        name,
        categoryId,
    };
}
