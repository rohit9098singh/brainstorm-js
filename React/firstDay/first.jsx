// A React functional component re-renders when its state or props change.
// When a state update happens, React re-executes the component function
// to generate a new Virtual DOM tree.It then compares this new Virtual DOM
// with the previous Virtual DOM using the reconciliation (diffing) algorithm. 
// Based on the differences, React updates only the necessary parts of the Real DOM instead of re-rendering everything.


// what is the output of below
function App() {
  const [count, setCount] = React.useState(0);

  console.log("render");

  return (
    <button
      onClick={() => {
        setCount(count + 1);
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
}
// ans => 1 Both use same stale value of count (0).

import jwt from "jsonwebtoken";
import response from "../utils/responseHandler.js";

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return response(res, 401, "Authorization header missing or invalid format");
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return response(res, 401, "No token provided");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded || !decoded.userId) {
      return response(res, 401, "Invalid token payload");
    }
    req.id = decoded.userId;
    next();
  } catch (error) {
    return response(res, 400, "Token validation failed", error.message);
  }
};

export default authenticateUser;