exports.seed = async knex => {
  await knex("tasks").insert([
    {
      project_id: 1,
      description:
        "I need to create a data model for my API and structure my backend.",
      notes: "Need to make sure I update my node version!",
      completed: false
    },
    {
      project_id: 1,
      description:
        "Next I need to set up redux and get data storage set up properly on my app."
      // completed: false
    },
    {
      project_id: 2,
      description: "I have to set up my Firebase storage and authentication.",
      notes:
        "It will also help to solidify my knowledge of Firebase a bit more!"
      // completed: false
    },
    {
      project_id: 2,
      description:
        "I need to set up my React application initially and test that I can display my data from the Firebase server"
      // completed: false
    }
  ]);
};
