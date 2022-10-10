import prisma from "../../src/database/prisma";
import supertest from "supertest";
import app from "../../src/app";
import signUpUserFactory from "../factories/signUpUserFactory";
import { faker } from "@faker-js/faker";
import { User } from "@prisma/client";

const server = supertest(app);

describe("Create stickerUser test", () => {
    beforeEach(async () => {
        await prisma.$executeRaw`TRUNCATE TABLE "stickersUsers"`;
    });

    it("Success test POST /stickers/:stickerId", async () => {
        //sign-up
        const user = signUpUserFactory();

        await server.post("/sign-up").send(user);

        const createdUser = await prisma.user.findUnique({
            where: { email: user.email },
        });

        expect(createdUser).not.toBeNull();

        //sign-in
        const loggedUser = await server
            .post("/sign-in")
            .send({ email: user.email, password: user.password });

        expect(loggedUser.status).toBe(200);
        expect(loggedUser.body.token).not.toBeNull();

        //test
        const stickerId = Number(faker.random.numeric(2));

        const response = await server
            .post(`/stickers/${stickerId}`)
            .set({ Authorization: `Bearer ${loggedUser.body.token}` })
            .send();

        expect(response.status).toBe(201);
    });

    it("Duplicate test POST (409) /stickers/:stickerId", async () => {
        //sign-up
        const user = signUpUserFactory();

        await server.post("/sign-up").send(user);

        const createdUser = await prisma.user.findUnique({
            where: { email: user.email },
        });

        expect(createdUser).not.toBeNull();

        //sign-in
        const loggedUser = await server
            .post("/sign-in")
            .send({ email: user.email, password: user.password });

        expect(loggedUser.status).toBe(200);
        expect(loggedUser.body.token).not.toBeNull();

        //test
        const stickerId = Number(faker.random.numeric(2));

        const stickerUserData = {
            userId: (createdUser as User).id,
            stickerId,
        };

        await prisma.stickerUser.create({ data: stickerUserData });

        const response = await server
            .post(`/stickers/${stickerId}`)
            .set({ Authorization: `Bearer ${loggedUser.body.token}` })
            .send();

        expect(response.status).toBe(409);
    });

    it("Non-existent sticker test POST (404) /stickers/:stickerId", async () => {
        //sign-up
        const user = signUpUserFactory();

        await server.post("/sign-up").send(user);

        const createdUser = await prisma.user.findUnique({
            where: { email: user.email },
        });

        expect(createdUser).not.toBeNull();

        //sign-in
        const loggedUser = await server
            .post("/sign-in")
            .send({ email: user.email, password: user.password });

        expect(loggedUser.status).toBe(200);
        expect(loggedUser.body.token).not.toBeNull();

        //test
        const stickerId = Number(faker.random.numeric(4));

        const response = await server
            .post(`/stickers/${stickerId}`)
            .set({ Authorization: `Bearer ${loggedUser.body.token}` })
            .send();

        expect(response.status).toBe(404);
    });

    it("Invalid token test POST (401) /stickers/:stickerId", async () => {
        const invalidToken = faker.random.word();

        const stickerId = Number(faker.random.numeric(2));

        const response = await server
            .post(`/stickers/${stickerId}`)
            .set({ Authorization: `Bearer ${invalidToken}` })
            .send();

        expect(response.status).toBe(401);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});
