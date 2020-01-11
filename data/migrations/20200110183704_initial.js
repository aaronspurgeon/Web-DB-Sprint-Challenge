exports.up = async knex => {
  await knex.schema.createTable("projects", table => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("description");
    table.boolean("completed").notNullable();
  });

  await knex.schema.createTable("tasks", table => {
    table.increments("id");
    table.string("description").notNullable();
    table.string("notes");
    table.boolean("completed").notNullable();
    table
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async knex => {};
