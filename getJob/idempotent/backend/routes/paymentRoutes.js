import express from "express";
import { makePayment } from "../controllers/paymentController.js";

const router = express.Router();

// POST /api/pay — Idempotent payment endpoint
router.post("/pay", makePayment);

export default router;
