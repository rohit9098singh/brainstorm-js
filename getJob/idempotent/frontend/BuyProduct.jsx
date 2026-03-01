import React, { useState } from "react";

function BuyProduct() {
  const [loading, setLoading] = useState(false);

  function generateIdempotencyKey() {
    const array = new Uint8Array(32);
    window.crypto.getRandomValues(array);
    return Array.from(array)
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  const handlePayment = async () => {
    if (loading) return; // Prevent double-click

    setLoading(true);

    const idempotencyKey = generateIdempotencyKey();

    try {
      const res = await fetch("/api/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey, // Sent as a custom header
        },
        body: JSON.stringify({
          userId: "user123",
          productId: "prod101",
          amount: 500,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handlePayment} disabled={loading}>
      {loading ? "Processing..." : "Buy Now"}
    </button>
  );
}

export default BuyProduct;
