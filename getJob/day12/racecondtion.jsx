// ### How do you handle race conditions in API calls inside useEffect? Write the solution with cleanup.
// Jab multiple API calls fire hote hain (e.g., fast changing search input), to old response
// late aake new data overwrite kar deta hai → wrong UI.

import { useEffect, useState } from "react";

function User({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const res = await fetch(`/api/user/${id}`, {
          signal: controller.signal
        });
        const result = await res.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      }
    }

    fetchData();

    return () => {
      controller.abort(); // cleanup: cancel previous request
    };
  }, [id]);

  return <div>{data?.name}</div>;
}

//  ### What is the difference between optimistic UI update and normal API update flow? When would you use optimistic updates?
// Optimistic UI me hum user action ke turant baad UI ko update kar dete hain without waiting for the API response.
//  Isme hum local state ko pehle update karte hain, phir background me API call karte hain.
//  Agar API successful ho jati hai to UI waise hi rehta hai, aur agar fail ho jati hai to 
// hum previous state pe rollback kar dete hain.

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = async () => {
    const prev = liked;     // backup
    setLiked(true);         // optimistic update

    try {
      await fetch("/api/like", { method: "POST" });
    } catch {
      setLiked(prev);       // rollback
    }
  };

  return (
    <button onClick={handleClick}>
      {liked ? "Liked" : "Like"}
    </button>
  );
}


// StrictMode is a development-only tool in React that helps identify potential issues like unsafe side effects,
// deprecated APIs, and unexpected behavior by intentionally running certain functions twice.
// It does not impact production builds.



// What is XSS and how do you prevent it in a React app? 
// XSS is a security vulnerability where malicious scripts are injected into a webpage and executed in the user's browser. 
// In React, we prevent XSS by relying on React’s automatic escaping of JSX, avoiding dangerouslySetInnerHTML,
//  and sanitizing any dynamic HTML content using libraries like DOMPurify.