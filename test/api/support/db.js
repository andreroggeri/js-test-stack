import { createConnection } from "mysql";
import { DB_CONFIG } from "./config.js";

export default function useDatabase(callback) {
  const connection = createConnection(DB_CONFIG);

  try {
    connection.connect();
    callback(connection);
  } finally {
    connection.end();
  }
}
