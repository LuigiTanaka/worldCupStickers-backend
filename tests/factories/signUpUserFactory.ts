import { faker } from "@faker-js/faker";

export default function signUpUserFactory() {
    const username = faker.random.alpha(10);
    const email = faker.internet.email();
    const password = faker.internet.password();
    const pictureUrl = faker.internet.url();

    return {
        username,
        email,
        password,
        confirmPassword: password,
        pictureUrl,
    };
}
