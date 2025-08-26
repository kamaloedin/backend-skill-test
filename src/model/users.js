import { nanoid } from 'nanoid';
import { Pool } from 'pg';
import InvariantError from '../exceptions/InvariantError.js';
import NotFoundError from '../exceptions/NotFoundError.js';

const pool = new Pool();

export const createNewUser = async (payload) => {
  const id = `user-${nanoid(16)}`;

  const { username, email, phone, status, department } = payload;

  const query = {
    text: 'INSERT INTO users VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
    values: [id, username, email, phone, Boolean(status), department],
  };

  const result = await pool.query(query);

  if (!result.rowCount) {
    throw new InvariantError('User gagal ditambahkan');
  }

  return result.rows[0].id;
};

export const getAllUsers = async () => {
  const query = {
    text: "SELECT id, username, email, phone, case when status = TRUE then 'TRUE' else 'FALSE' end as status, department FROM users",
  };

  const result = await pool.query(query);

  return result.rows;
};

export const updateUser = async (payload) => {
  const { id, username, email, phone, status, department } = payload;
  const query = {
    text: 'UPDATE users SET username = $1, email = $2, phone = $3, status = $4, department = $5 WHERE id = $6 RETURNING id',
    values: [username, email, phone, status, department, id],
  };

  const result = await pool.query(query);

  if (!result.rowCount) {
    throw new NotFoundError('User tidak dapat ditemukan');
  }

  return result.rows[0].id;
};

export const deleteUser = async (id) => {
  const query = {
    text: 'DELETE FROM users WHERE id = $1 RETURNING id',
    values: [id],
  };

  const result = await pool.query(query);

  if (!result.rowCount) {
    throw new NotFoundError('User tidak dapat ditemukan');
  }

  return result.rows[0].id;
};
