import stickerUserFactory from "../../factories/stickerUserFactory";
import stickerFactory from "../../factories/stickerUserFactory";
import userFactory from "../../factories/userFactory";
import { notFoundError, conflictError } from "../../../src/utils/errorUtils";
import * as stickerRepository from "../../../src/repositories/stickerRepository";
import * as stickerService from "../../../src/services/stickerService";

describe("sticker services tests", () => {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
    });

    it("Test creation of the relation between stickers and users successfully", async () => {
        const stickerUser = stickerUserFactory();
        const sticker = stickerFactory();
        const user = userFactory();

        jest.spyOn(stickerRepository, "getStickerById").mockImplementationOnce(
            (): any => {
                return sticker;
            }
        );

        jest.spyOn(stickerRepository, "getUserById").mockImplementationOnce(
            (): any => {
                return user;
            }
        );

        jest.spyOn(
            stickerRepository,
            "getStickerUserByIds"
        ).mockImplementationOnce((): any => null);

        jest.spyOn(
            stickerRepository,
            "insertStickerUser"
        ).mockImplementationOnce((): any => null);

        await stickerService.createStickerUser(
            stickerUser.userId,
            stickerUser.stickerId
        );

        expect(stickerRepository.insertStickerUser).toBeCalled();
    });

    it("Test creation of the relation between stickers and a non-existent user", async () => {
        const stickerUser = stickerUserFactory();
        const sticker = stickerFactory();

        jest.spyOn(stickerRepository, "getStickerById").mockImplementationOnce(
            (): any => {
                return sticker;
            }
        );

        jest.spyOn(stickerRepository, "getUserById").mockImplementationOnce(
            (): any => null
        );

        jest.spyOn(
            stickerRepository,
            "getStickerUserByIds"
        ).mockImplementationOnce((): any => null);

        jest.spyOn(
            stickerRepository,
            "insertStickerUser"
        ).mockImplementationOnce((): any => null);

        const result = stickerService.createStickerUser(
            stickerUser.userId,
            stickerUser.stickerId
        );

        expect(result).rejects.toEqual(notFoundError("user doesn't exist"));
        expect(stickerRepository.insertStickerUser).not.toBeCalled();
    });

    it("Test creation of the relation between users and a non-existent sticker", async () => {
        const stickerUser = stickerUserFactory();
        const user = userFactory();

        jest.spyOn(stickerRepository, "getStickerById").mockImplementationOnce(
            (): any => null
        );

        jest.spyOn(stickerRepository, "getUserById").mockImplementationOnce(
            (): any => {
                return user;
            }
        );

        jest.spyOn(
            stickerRepository,
            "getStickerUserByIds"
        ).mockImplementationOnce((): any => null);

        jest.spyOn(
            stickerRepository,
            "insertStickerUser"
        ).mockImplementationOnce((): any => null);

        const result = stickerService.createStickerUser(
            stickerUser.userId,
            stickerUser.stickerId
        );

        expect(result).rejects.toEqual(notFoundError("sticker doesn't exist"));
        expect(stickerRepository.insertStickerUser).not.toBeCalled();
    });

    it("Test duplicate creation of the relation between stickers and users", async () => {
        const stickerUser = stickerUserFactory();
        const sticker = stickerFactory();
        const user = userFactory();

        jest.spyOn(stickerRepository, "getStickerById").mockImplementationOnce(
            (): any => {
                return sticker;
            }
        );

        jest.spyOn(stickerRepository, "getUserById").mockImplementationOnce(
            (): any => {
                return user;
            }
        );

        jest.spyOn(
            stickerRepository,
            "getStickerUserByIds"
        ).mockImplementationOnce((): any => {
            return stickerUser;
        });

        jest.spyOn(
            stickerRepository,
            "insertStickerUser"
        ).mockImplementationOnce((): any => null);

        const result = stickerService.createStickerUser(
            stickerUser.userId,
            stickerUser.stickerId
        );

        expect(result).rejects.toEqual(
            conflictError("user already have this stickers")
        );
        expect(stickerRepository.insertStickerUser).not.toBeCalled();
    });
});
