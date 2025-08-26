import usersValidator from '../validator/index.js';
import { createNewUser, getAllUsers, updateUser, deleteUser } from '../model/users.js';
import ClientError from '../exceptions/ClientError.js';

export const postNewUserController = async (req, res) => {
  try {
    usersValidator.validateUserPayload(req.body);
    const id = await createNewUser(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        addedUser: {
          id,
          ...req.body,
        },
      },
    });
  } catch (error) {
    if (error instanceof ClientError) {
      return res.status(error.statusCode).json({
        status: 'fail',
        message: error.message,
      });
    }
    return res.status(500).json({
      status: 'fail',
      message: 'Maaf terjadi kegagalan pada server kami',
    });
  }
};

export const getUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (error) {
    if (error instanceof ClientError) {
      return res.status(error.statusCode).json({
        status: 'fail',
        message: error.message,
      });
    }
    console.error(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Maaf terjadi kegagalan pada server kami',
    });
  }
};

export const putUserController = async (req, res) => {
  const { id } = req.params;
  try {
    usersValidator.validateUserPayload(req.body);
    await updateUser({ id, ...req.body });
    res.status(200).json({
      status: 'success',
      message: 'User berhasil diubah',
      data: {
        user: {
          id,
          ...req.body,
        },
      },
    });
  } catch (error) {
    if (error instanceof ClientError) {
      return res.status(error.statusCode).json({
        status: 'fail',
        message: error.message,
      });
    }
    console.error(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Maaf terjadi kegagalan pada server kami',
    });
  }
};

export const deleteUserController = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteUser(id);
    res.status(200).json({
      status: 'success',
      message: 'User berhasil dihapus',
    });
  } catch (error) {
    if (error instanceof ClientError) {
      return res.status(error.statusCode).json({
        status: 'fail',
        message: error.message,
      });
    }
    console.error(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Maaf terjadi kegagalan pada server kami',
    });
  }
};
