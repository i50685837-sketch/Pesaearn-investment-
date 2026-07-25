const express = require("express");

const router = express.Router();

const paymentController = require("../controllers/paymentController");

router.post("/deposit",paymentController.deposit);

router.get("/status/:trackingId",paymentController.status);

router.post("/callback",paymentController.callback);

module.exports = router;
