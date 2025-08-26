import InvariantError from '../exceptions/InvariantError.js';
import userSchema from './schema.js';

const usersValidator = {
  validateUserPayload: (payload) => {
    const validationResult = userSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

export default usersValidator;
