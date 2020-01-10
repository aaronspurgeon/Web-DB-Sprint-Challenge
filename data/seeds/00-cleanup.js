exports.seed = async knex => {
  await knex("projects").truncate();
  await knex("tasks").truncate();
  await knex("resources").truncate();
};
