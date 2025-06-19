const Order = require('../../domain/entities/Order');

class CreateOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(orderData, user) {
    if (!user) throw new Error('Usuario no autenticado');

    const order = new Order({
      userId: user.id,
      products: orderData.products,
      total: orderData.total
    });

    return await this.orderRepository.create(order);
  }
}

module.exports = CreateOrder;