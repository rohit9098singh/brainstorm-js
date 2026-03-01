import Order from "../models/Order.js";

/**
 * Idempotent Payment Controller
 *
 * Uses the "Idempotency-Key" header to prevent duplicate payments.
 *
 * Flow:
 * 1. Client sends a unique idempotency key with every payment request.
 * 2. Server checks if an order with that key already exists.
 *    - If YES → return the existing order (no duplicate charge).
 *    - If NO  → process the payment and store the key with the order.
 */
export const makePayment = async (req, res) => {
  try {
    const idempotencyKey = req.headers["idempotency-key"];
    const { userId, productId, amount } = req.body;

    // --- Validate idempotency key ---
    if (!idempotencyKey) {
      return res.status(400).json({
        message: "Idempotency key is required",
      });
    }

    // --- Step 1: Check if request was already processed ---
    const existingOrder = await Order.findOne({ idempotencyKey });

    if (existingOrder) {
      return res.status(200).json({
        message: "Duplicate request detected — returning existing order",
        order: existingOrder,
      });
    }

    // --- Step 2: Process payment (simulate) ---
    // In production: call Razorpay / Stripe API here
    const newOrder = await Order.create({
      userId,
      productId,
      amount,
      idempotencyKey,
      status: "SUCCESS",
    });

    return res.status(201).json({
      message: "Payment successful",
      order: newOrder,
    });
  } catch (error) {
    console.error("Payment error:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};
