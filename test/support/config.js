const API_TARGET_URL = process.env.TARGET_URL || "https://backend-staging.agendaodonto.com";
const WEB_TARGET_URL = 'https://staging.agendaodonto.com';

const DB_CONFIG = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "ao-dev",
};

export { API_TARGET_URL as TARGET_URL, DB_CONFIG, WEB_TARGET_URL };
