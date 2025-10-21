function firstResolvedPromise(urls) {
    return new Promise((resolve, reject) => {
        for (let url of urls) {
            fetch(url).then((res) => resolve(res)).catch((err) => reject(err))
        }
    })
}

const url = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
]

firstResolvedPromise(url).then((res) => res.json()).then((data) => { console.log(data) }).catch((error) => { console.log(error) })

function 


// Use Promises (then) when:
// You are doing multiple independent async tasks at once (parallel).
// Example: 
Promise.all([fetchUser(), fetchPosts(), fetchComments()])
  .then(([user, posts, comments]) => {
    console.log(user, posts, comments);
  });

  
//  Use async/await when:
// Tasks depend on each other (sequential).
// You want clean, synchronous-looking code.
async function loadData() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);
  console.log(user, posts);
}
