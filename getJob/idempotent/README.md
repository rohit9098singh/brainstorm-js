# Idempotent Payment — Example

> **Idempotency** means making the **same request multiple times** produces the **same result** — no duplicate side-effects (e.g., no double payment).

 idempotency => In a payment system, users may accidentally click the "Buy" button multiple times due to slow internet or UI lag. 
 This can cause multiple identical payment requests to reach the server.

To prevent duplicate purchases, I implement idempotency at the backend level.
The server generates a unique idempotency key for each payment attempt and stores it along with the transaction record.

 When a payment request is received, the controller checks whether a transaction with the same idempotency key already exists:

If it exists → return the previous response (do not process again).

If it does not exist → process the payment and store the key.
This ensures that even if the request is sent multiple times, the payment is processed only once.
---

## How It Works

### Frontend (React)
1. User clicks **"Buy Now"**.
2. A **random 64-char hex idempotency key** is generated using `crypto.getRandomValues`.
3. The key is sent as a custom header: `Idempotency-Key`.
4. Button is disabled while request is in-flight (prevents double-click).

### Backend (Express + MongoDB)
1. Server reads the `Idempotency-Key` header.
2. Looks up the key in the `orders` collection.
   - **Found** → Returns the existing order (HTTP 200). No duplicate charge.
   - **Not found** → Processes payment, stores order with the key (HTTP 201).
3. The `unique: true` constraint on `idempotencyKey` acts as a DB-level safety net.

---

## Key Concepts for Interview

