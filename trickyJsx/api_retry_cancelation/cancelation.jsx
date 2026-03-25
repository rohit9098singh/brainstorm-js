
import { useRef, useState } from "react"

function SearchUsers() {

  const [users, setUsers] = useState([]);
  const controllerRef = useRef(null);

  const searchUsers = async (query) => {

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    controllerRef.current = new AbortController();

    try {

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users?name=${query}`,
        { signal: controllerRef.current.signal }
      );

      const data = await res.json();

      setUsers(data);

    } catch (err) {

      if (err.name === "AbortError") {
        console.log("Previous request cancelled");
      } else {
        console.error(err);
      }

    }
  };

  return (
    <div>

      <input
        placeholder="Search user"
        onChange={(e) => searchUsers(e.target.value)}
      />

      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}

    </div>
  );
}

export default SearchUsers;

