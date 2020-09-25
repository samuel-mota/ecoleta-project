import knex from "knex";
import path from "path"; // standardize the path

const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite'),
  },
  useNullAsDefault: true,
});

// migrations = DB history

export default connection;