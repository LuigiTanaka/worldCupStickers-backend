import { faker } from "@faker-js/faker";

export default function stickerFactory() {
    const stickerId = Number(faker.random.numeric(2));

    return {
        userId: 1,
        stickerId,
    };
}
