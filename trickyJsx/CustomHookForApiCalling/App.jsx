import React, { useState } from "react";
import useFetch from "./Usefetch";

const App = () => {
  const [postId, setPostId] = useState(1);

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <button onClick={() => setPostId(1)}>Post 1</button>
      <button onClick={() => setPostId(2)}>Post 2</button>
      <button onClick={() => setPostId(3)}>Post 3</button>

      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default App;
