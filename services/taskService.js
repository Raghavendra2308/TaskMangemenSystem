const taskRepository = require(
  "../repositories/taskRepository"
);

const createTask = async (
  title,
  description,
  status,
  priority,
  dueDate,
  userId
) => {

  if (
    !title ||
    !status ||
    !priority
  ) {
    throw new Error(
      "Title, Status and Priority are required"
    );
  }

  const task =
    await taskRepository.createTask(
      title,
      description,
      status,
      priority,
      dueDate,
      userId
    );

  return task;
};

module.exports = {
  createTask
};