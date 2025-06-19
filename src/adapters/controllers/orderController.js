const CreateOrder = require('../../application/use_cases/CreateOrder');
const OrderRepository = require('../../infrastructure/repositories/OrderRepository');

const orderRepository = new OrderRepository();
const createOrder = new CreateOrder(orderRepository);

const createOrderHandler = async (req, res) => {
  try {
    const newOrder = await createOrder.execute(req.body, req.user);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createOrderHandler
};