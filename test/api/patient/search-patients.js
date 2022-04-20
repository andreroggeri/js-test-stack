import faker from "@faker-js/faker";
import { expect } from "chai";
import { api } from "../support/api.js";
import getToken from "../support/auth.js";

describe("Patient search", () => {
  let token;
  let clinic;
  before(async () => {
    token = await getToken();
    clinic = await api
      .post("/v1/clinics/")
      .set("Authorization", `Token ${token}`)
      .send({ name: "Some name yuhu" })
      .expect(201);
  });

  it("should create a patient", async () => {
    const createUserBody = {
      name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      sex: "F",
      phone: faker.phone.phoneNumber("###########"),
      clinic: clinic.body.id,
    };
    const response = await api
      .post("/v1/patients/")
      .set("Authorization", `Token ${token}`)
      .send(createUserBody)
      .expect(201);

    expect(response.body.id).to.be.a("number");
  });

  it("should retrieve all patients available", async () => {
    const response = await api
      .get("/v1/patients/")
      .set("Authorization", `Token ${token}`)
      .expect(200);

    expect(response.body.results).to.have.lengthOf.above(0);
  });
});
