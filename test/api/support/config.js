const TARGET_URL = process.env.TARGET_URL || "http://localhost:8001";

const DB_CONFIG = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "ao-dev",
};

export { TARGET_URL, DB_CONFIG };
