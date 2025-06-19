class Order {
  constructor({ userId, products, total, status, createdAt }) {
    this.userId = userId;         // ID del usuario que hizo la compra
    this.products = products;     // Array de { productId, quantity }
    this.total = total;           // Total de la orden
    this.status = status || 'pending'; // Estado inicial
    this.createdAt = createdAt || new Date();
  }
}

module.exports = Order;