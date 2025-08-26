import Joi from 'joi';

const userSchema = Joi.object({
  username: Joi.string().required().messages({
    'any.required': 'Username harus diisi',
    'string.base': 'Username harus bernilai string',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email harus diisi',
    'string.email': 'Format email tidak valid',
    'string.base': 'Username harus bernilai string',
  }),
  phone: Joi.string().pattern(/^\d+$/).required().min(10).messages({
    'any.required': 'No Hp harus diisi',
    'string.pattern.base': 'No Hp hanya boleh terdiri dari angka',
    'string.min': 'No Hp minimal harus terdiri dari 10 digit',
    'string.base': 'Username harus bernilai string',
  }),
  status: Joi.boolean().required().messages({
    'any.required': 'No Hp harus diisi',
    'boolean.base': 'Status harus diisi dengan nilai boolean',
  }),
  department: Joi.string().required().messages({
    'any.required': 'No Hp harus diisi',
    'string.base': 'Username harus bernilai string',
  }),
});

export default userSchema;
