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





const getAllTasks = async (
  userId
) => {

  const tasks =
    await taskRepository.getAllTasks(
      userId
    );

  return tasks;

};


const getTaskById = async (
  taskId,
  userId
) => {

  const task =
    await taskRepository.getTaskById(
      taskId,
      userId
    );

  if (!task) {
    throw new Error(
      "Task Not Found"
    );
  }

  return task;

};



const updateTask = async (
  taskId,
  title,
  description,
  status,
  priority,
  dueDate,
  userId
) => {

  const task =
    await taskRepository.updateTask(
      taskId,
      title,
      description,
      status,
      priority,
      dueDate,
      userId
    );

  if (!task) {
    throw new Error(
      "Task Not Found"
    );
  }

  return task;

};


const deleteTask = async (
  taskId,
  userId
) => {

  const task =
    await taskRepository.deleteTask(
      taskId,
      userId
    );

  if (!task) {
    throw new Error(
      "Task Not Found"
    );
  }

  return task;

};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask 

};


