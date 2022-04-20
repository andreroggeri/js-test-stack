import faker from "@faker-js/faker";
import { expect } from "chai";
import { api } from "../../support/api.js";

describe("user registration", () => {
  it("should create an user and be able to authenticate", async () => {
    // Arrange
    const createUserBody = {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      cro: faker.datatype.number(),
      cro_state: faker.random.arrayElement(["SP", "MG", "RS"]),
      sex: faker.random.arrayElement(["M", "F"]),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    await api.post("/auth/users/").send(createUserBody).expect(201);

    // Act
    const authBody = {
      email: createUserBody.email,
      password: createUserBody.password,
    };
    const response = await api
      .post("/auth/token/login")
      .send(authBody)
      .expect(200);

    // Assert
    expect(response.body.auth_token).to.be.a("string");
  });
});
