exports.seed = async knex => {
  await knex("projects").insert([
    {
      name: "Twitter clone",
      description: "A social media clone made with the MERN stack."
      // completed: false
    },
    {
      name: "DevHired",
      description:
        "An app built using React and Firebase/Node to aid developers in their job search."
      // completed: false
    }
  ]);
};

// a project can have multiple tasks.
// a task belongs to only one project.
// a project can use multiple resources.
// the same resource can be used in multiple projects.
// when adding projects the client must provide a name, the description is optional.
// when adding resources the client must provide a name, the description is optional.
// when adding a task the client must provide a description, the notes are optional.
// when adding a task the client must provide the id of an existing project.
// for projects and tasks if no value is provided for the completed property, the API should provide a default value of false.
