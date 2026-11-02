const db = require("../config/db");

const createTask = async (
  title,
  description,
  status,
  priority,
  dueDate,
  userId
) => {

  const result = await db.query(
    `
    INSERT INTO tasks
    (
      title,
      description,
      status,
      priority,
      due_date,
      user_id
    )
    VALUES
    (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6
    )
    RETURNING *
    `,
    [
      title,
      description,
      status,
      priority,
      dueDate,
      userId
    ]
  );

  return result.rows[0];
};










const getAllTasks = async (userId) => {

  const result = await db.query(
    `
    SELECT *
    FROM tasks
    WHERE user_id = $1
    ORDER BY id DESC
    `,
    [userId]
  );

  return result.rows;

};







const getTaskById = async (
  taskId,
  userId
) => {

  const result = await db.query(
    `
    SELECT *
    FROM tasks
    WHERE id = $1
    AND user_id = $2
    `,
    [taskId, userId]
  );

  return result.rows[0];

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

  const result = await db.query(
    `
    UPDATE tasks
    SET
      title = $1,
      description = $2,
      status = $3,
      priority = $4,
      due_date = $5
    WHERE id = $6
    AND user_id = $7
    RETURNING *
    `,
    [
      title,
      description,
      status,
      priority,
      dueDate,
      taskId,
      userId
    ]
  );

  return result.rows[0];

};


const deleteTask = async (
  taskId,
  userId
) => {

  const result = await db.query(
    `
    DELETE FROM tasks
    WHERE id = $1
    AND user_id = $2
    RETURNING *
    `,
    [taskId, userId]
  );

  return result.rows[0];

};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
};