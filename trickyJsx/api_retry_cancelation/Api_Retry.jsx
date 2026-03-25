import { useEffect, useState } from 'react'

const Usefetch = ({ url, options = {}, retries = 3, delay = 500 }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (retryCount, retryDelay) => {

        try {

            setLoading(true);

            const res = await fetch(url, options);

            if (!res.ok) {
                throw new Error("There is some error");
            }

            const result = await res.json();
            setData(result);

        } catch (error) {

            if (retryCount === 0) {
                setError(error);
                return;
            }

            await new Promise(res => setTimeout(res, retryDelay));

            return fetchData(retryCount - 1, retryDelay * 2);

        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchData(retries, delay);
    }, [url]);

    return { data, loading, error };

}

export default Usefetch;