import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  amount: { type: Number, required: true },
  idempotencyKey: { type: String, unique: true, required: true }, // Ensures no duplicate orders
  status: { type: String, enum: ["SUCCESS", "FAILED", "PENDING"], default: "PENDING" },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;
