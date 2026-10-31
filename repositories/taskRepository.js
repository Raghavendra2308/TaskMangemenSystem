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

module.exports = {
  createTask
};