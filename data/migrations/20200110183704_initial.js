exports.up = async knex => {
  await knex.schema.createTable("projects", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("description");
    table
      .boolean("completed")
      .defaultTo(false)
      .notNullable();
  });

  await knex.schema.createTable("tasks", table => {
    table.increments("id");
    table.string("description").notNullable();
    table.string("notes");
    table
      .boolean("completed")
      .defaultTo(false)
      .notNullable();
    table
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("resources", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("description");
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("projects");
};
