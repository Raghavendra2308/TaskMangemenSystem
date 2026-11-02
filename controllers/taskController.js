const taskService = require(
  "../services/taskService"
);

const createTask = async (
  req,
  res
) => {

  try {

    const {
      title,
      description,
      status,
      priority,
      dueDate
    } = req.body;

    const task =
      await taskService.createTask(
        title,
        description,
        status,
        priority,
        dueDate,
        req.user.userId
      );

    res.status(201).json({
      message: "Task Created Successfully",
      task
    });

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }

};





const getAllTasks = async (
  req,
  res
) => {

  try {

    const tasks =
      await taskService.getAllTasks(
        req.user.userId
      );

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

const getTaskById = async (
  req,
  res
) => {

  try {

    const task =
      await taskService.getTaskById(
        req.params.id,
        req.user.userId
      );

    res.status(200).json(task);

  } catch (error) {

    res.status(404).json({
      message: error.message
    });

  }

};


const updateTask = async (
  req,
  res
) => {

  try {

    const {
      title,
      description,
      status,
      priority,
      dueDate
    } = req.body;

    const updatedTask =
      await taskService.updateTask(
        req.params.id,
        title,
        description,
        status,
        priority,
        dueDate,
        req.user.userId
      );

    res.status(200).json({
      message: "Task Updated Successfully",
      task: updatedTask
    });

  } catch (error) {

    res.status(404).json({
      message: error.message
    });

  }

};

const deleteTask = async (
  req,
  res
) => {

  try {

    await taskService.deleteTask(
      req.params.id,
      req.user.userId
    );

    res.status(200).json({
      message:
        "Task Deleted Successfully"
    });

  } catch (error) {

    res.status(404).json({
      message: error.message
    });

  }

};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
};
