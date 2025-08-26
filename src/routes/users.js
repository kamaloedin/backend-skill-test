import express from 'express';
import {
  postNewUserController,
  getUsersController,
  putUserController,
  deleteUserController,
} from '../controller/users.js';
const router = express.Router();

router.post('/', postNewUserController);

router.get('/', getUsersController);

router.put('/:id', putUserController);

router.delete('/:id', deleteUserController);

export default router;
