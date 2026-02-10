async function fetchWithRetry(url, options = {}, retries = 3, delay = 500) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }

    // Exponential backoff
    await new Promise(resolve => setTimeout(resolve, delay));

    return fetchWithRetry(url, options, retries - 1, delay * 2);
  }
}


(async () => {
  try {
    const data = await fetchWithRetry(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'Hello',
          body: 'Retry logic test',
          userId: 1
        })
      }
    );
    console.log('POST Response:', data);
  } catch (err) {
    console.error('Final Error:', err.message);
  }
})();
