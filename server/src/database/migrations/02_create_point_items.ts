import Knex from "knex"; // refers to type, so "K" capitalized

export async function up(knex: Knex) {
  // CREATE TABLE
  return knex.schema.createTable("point_items", (table) => {
    table.increments("id").primary();
    table.string("point_id")
      .notNullable()
      .references("id")
      .inTable("points");
    table.string("item_id")
      .notNullable()
      .references("id")
      .inTable("items");
  });
}

export async function down(knex: Knex) {
  // BACK TO PREVIOUS (DELETE TABLE)
  return knex.schema.dropTable("point_items");
}
