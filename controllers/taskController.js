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

module.exports = {
  createTask
};