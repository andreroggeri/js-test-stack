import supertest from "supertest";
import { TARGET_URL } from "./config.js";

const api = supertest(`${TARGET_URL}`);

export { api };
