class ApplyCoupon {
  constructor(couponRepository) {
    this.couponRepository = couponRepository;
  }

  async execute(code) {
    const coupon = await this.couponRepository.findByCode(code);
    if (!coupon) throw new Error('Cupón no encontrado');
    if (!coupon.isValid()) throw new Error('Cupón expirado');

    return coupon;
  }
}

module.exports = ApplyCoupon;