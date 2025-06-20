
const express = require('express');
const router = express.Router();

module.exports = (orderController) => {
  /**
   * @swagger
   * /api/v1/orders:
   *   post:
   *     summary: Crea una nueva orden
   *     tags: [Orders]
   *     security:
   *       - BearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Order'
   *     responses:
   *       201:
   *         description: Orden creada
   */
  router.post('/', (req, res) => orderController.create(req, res));

  return router;
};