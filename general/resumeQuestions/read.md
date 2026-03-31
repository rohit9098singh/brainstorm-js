Q) explain me about the socket io ?
Socket.IO is used to implement real-time communication between client and server. Unlike traditional HTTP requests, it maintains a persistent connection using WebSockets, which allows instant data exchange. It is commonly used in chat applications, live notifications, and collaborative tools.

Q) what do you mean by UTM tracking 
UTM (Urchin Tracking Module) parameters URL me add kiye jaate hain taaki traffic source track ho sake.

utm_source=facebook  => traffic source
utm_medium=ads       => marketing medium
utm_campaign=summer_sale => campaign name

When a user lands on the website with UTM parameters in the URL, I capture those parameters using middleware and store them in cookies. I chose cookies because they persist across multiple pages and are accessible on both the client and server side. This allows us to maintain the  data throughout the user journey and also attach it to important backend events like signup or purchase. Compared to localStorage or sessionStorage, cookies are automatically sent with HTTP requests, which makes them more suitable for marketing attribution tracking.


Q) How did you improved the performace of the webpage ?
I improved performance by optimizing images, lazy loading components, reducing unnecessary re-renders, and improving code splitting using Next.js features. I also optimized API calls and reduced bundle size which helped improve page load time and Lighthouse performance score.

I optimized API calls by reducing unnecessary requests and improving data fetching strategies. I implemented caching and proper state management so the same API was not called repeatedly. I also used techniques like debouncing for search requests, pagination for large datasets, and server-side fetching in Next.js where required. These improvements reduced network calls and improved page load performance.

Q) What is the GraphQl ?

GraphQL ek query language hai APIs ke liye.
Ye client ko allow karta hai exact data request karne ke liye.

GraphQL is a query language for APIs that allows the client to request exactly the data it needs. Unlike REST APIs where multiple endpoints may be required, GraphQL uses a single endpoint and provides flexible queries, reducing over-fetching and under-fetching of data.

Q) how nodejs handle asyncronus calls
Node.js is single-threaded but uses an event-driven, non-blocking architecture. When an asynchronous task like a database query or file operation is encountered, Node.js delegates heavy operations to worker threads through libuv,. The main thread continues executing other tasks. Once the asynchronous operation is completed, the callback is placed in the callback queue, and the event loop pushes it to the call stack when it becomes available.

Q) what is middleare ? 
Middleware ek function hota hai jo request aur response ke beech me execute hota hai.

Q) if 1 million user hai to login ke time pe kya vo pura 1 million ducments ko check karega kya nhi na 

Instead of scanning all documents, databases use indexing to speed up lookups. By creating a unique index on fields like email, the database can locate records in logarithmic time instead of scanning the entire collection. This ensures fast user validation even with millions of users.


Firebase ek Backend-as-a-Service (BaaS) platform hai jo Google ne develop kiya hai.

Ye developers ko backend infrastructure ready form me provide karta hai, taaki unhe khud server manage na karna pade.
Isme multiple services hoti hain:
Authentication
Realtime database / Firestore
Cloud storage
Hosting
Push notifications
Analytics


Q) how have u implemeted the email verification based implemnetaion in your project 
Jab user signup karta hai to backend me user create hota hai with isVerified=false. Uske baad hum JWT based verification token generate karte hain jo 15 minutes ke liye valid hota hai. Ye token email verification link me send hota hai using Nodemailer / AWS SES. Jab user link click karta hai to backend token verify karta hai aur user ka isVerified field true kar deta hai aur user ko login page pe redirect kar dete hain.


Q) Redux Toolkit ka kaise kasie kiye ho ?
Redux Toolkit Query kya karta hai

Tum bol sakte ho:

Redux Toolkit Query ek data fetching and caching library hai jo Redux Toolkit ka part hai. Ye automatically API calls handle karta hai, server state ko Redux store me manage karta hai aur caching, loading state aur error handling automatically provide karta hai.

RTK Query automatically handle karta hai:

✔ API fetching
✔ caching
✔ loading state
✔ error state
✔ refetching
✔ global state sync