import { useState, useEffect } from "react";

export function wrongDependency() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count is ${count}`);
    }, []); // ❌ count is missing in dependencies

    // useEffect(() => {
    //     console.log(`Count is ${count}`);
    // }, [count]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}


// Use <iframe> when you want to embed another web page or HTML content in your site.
// Use <embed> when you want to embed a file (like PDF, SVG, audio, video) that isn’t a full HTML page.