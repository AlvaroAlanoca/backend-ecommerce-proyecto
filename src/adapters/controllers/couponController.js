const ApplyCoupon = require('../../application/use_cases/ApplyCoupon');
const CouponRepository = require('../../infrastructure/repositories/CouponRepository');

const couponRepository = new CouponRepository();
const applyCoupon = new ApplyCoupon(couponRepository);

const applyCouponHandler = async (req, res) => {
  try {
    const coupon = await applyCoupon.execute(req.params.code);
    res.json({ valid: true, discount: coupon.discount });
  } catch (err) {
    res.status(400).json({ valid: false, error: err.message });
  }
};

module.exports = {
  applyCouponHandler
};