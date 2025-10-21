"use client"
import React from "react";
import useFetch from "./useFetch"
const Parent = () => {
  const { loading, data, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    data.length === 0 ? (
      <p>No data available right now</p>
    ) : (
      <div className="grid grid-cols-3 gap-4">
        {data.map((d) => (
          <div key={d.id}>
            <h2>{d.title}</h2>
            <p>{d.body}</p>
          </div>
        ))}
      </div>
    )
  );
};

export default Parent;
