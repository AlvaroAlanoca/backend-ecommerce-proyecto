
const express = require('express');
const router = express.Router();

module.exports = (couponController) => {
  /**
   * @swagger
   * /api/v1/cupons:
   *   post:
   *     summary: Crea una nueva orden
   *     tags: [Cupons]
   *     security:
   *       - BearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Cupons'
   *     responses:
   *       201:
   *         description: Orden creada
   */
  //router.post('/', (req, res) => orderController.create(req, res));
  router.post('/', (req, res) => couponController.create(req, res));
  return router;
};