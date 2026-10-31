const db = require("../config/db");

const createUser = async (
  name,
  email,
  password
) => {

  const query = `
    INSERT INTO users
    (
      name,
      email,
      password
    )
    VALUES
    (
      $1,
      $2,
      $3
    )
    RETURNING *;
  `;

  const result = await db.query(
    query,
    [name, email, password]
  );

  return result.rows[0];
};

const findUserByEmail = async (
  email
) => {

  const result = await db.query(
    `
      SELECT *
      FROM users
      WHERE email = $1
    `,
    [email]
  );

  return result.rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
};


