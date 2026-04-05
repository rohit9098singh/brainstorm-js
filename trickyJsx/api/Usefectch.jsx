// A race condition occurs when multiple API requests are triggered, 
// and their responses arrive in a different order than they were sent.
// This can cause outdated data to overwrite the latest state, leading to unexpected UI behavior

"use client";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // 🔥 important
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // 🔥 cleanup (prevents race condition + memory leak)
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

