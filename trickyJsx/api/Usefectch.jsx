"use client"
const { useState, useEffect } = require("react")

const useFetch = ( url ) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            if(!response?.ok){
                const check=  new Error("failed to fetch ")
                setError(check);
            }
            const data =await  response.json();
            setData(data);
        } catch (error) {
            console.log(error.message)
            setError()
        } finally {
            setLoading(false)
        }

    }
    console.log(data)

    useEffect(()=>{
       fetchData();
    },[url])
    return {data,loading,error}
}

export default useFetch;