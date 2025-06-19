class Coupon {
  constructor({ code, discount, expiresAt }) {
    this.code = code;               // Código como 'DESC10'
    this.discount = discount;       // Descuento en porcentaje (10 = 10%)
    this.expiresAt = new Date(expiresAt); // Fecha de expiración
  }

  isValid() {
    return new Date() <= this.expiresAt;
  }
}

module.exports = Coupon;