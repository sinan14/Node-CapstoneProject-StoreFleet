// Please don't change the pre-written code
// Import the necessary modules here

import { createNewOrderRepo } from '../model/order.repository.js';
import { ErrorHandler } from '../../../utils/errorHandler.js';

export const createNewOrder = async (req, res, next) => {
  // Write your code here for placing a new order
  try {
    const order = await createNewOrderRepo({
      ...req.body,
      user: req.user._id,
    });
    if (order) {
      res.status(201).json({ success: true, order });
    } else {
      return next(new ErrorHandler(400, 'some error occured!'));
    }
  } catch (error) {
    return next(new ErrorHandler(400, error));
  }
};
