exports.seed = async knex => {
  await knex("resources").insert([
    {
      name: "React"
    },
    {
      name: "Firebase"
    }
  ]);
};
