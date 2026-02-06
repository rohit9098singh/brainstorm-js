import React, { useEffect } from 'react'
const Check = () => {
    let score = 0;
    const handleClick = () => {
        score = score + 10;
        console.log(score)
    }

    useEffect(() => {
        console.log("what is the", score)
    }, [score])
    return (
        <div>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default Check
