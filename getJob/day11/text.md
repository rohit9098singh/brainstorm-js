✅ 1. React Fiber

ans=> React Fiber ek reconciliation engine hai jo rendering ko incremental(chote chote task me todna) banata hai. Pehle rendering synchronous thi jisse UI block hota tha. Fiber work ko small chunks me todta hai aur pause/resume allow karta hai, jisse performance aur responsiveness improve hoti hai.
Fiber do phases me kaam karta hai — render phase (interruptible) aur commit phase (non-interruptible). Is wajah se React heavy UI updates ko smoothly handle kar pata hai aur concurrent features enable hote hain.

✅ 2. Concurrent Features

ans=> Concurrent features React ko ye decide karne dete hain ki kaunsa update urgent hai aur kaunsa delay ho sakta hai, jisse UI responsive rehta hai.

For example, typing input urgent hota hai, lekin list filtering ko hum startTransition me daal dete hain taaki UI block na ho.
### React 18 me startTransition, useTransition aur useDeferredValue diye gaye hain jo non-urgent updates ko schedule karte hain.

✅ 3. Batching

ans => Batching ka matlab hai multiple state updates ko combine karke ek hi render me process karna.
React 18 me automatic batching har jagah hoti hai — even inside setTimeout, promises, aur async code — jabki pehle sirf React events me hoti thi.

✅ 4. Suspense 
ans => Suspense React ko allow karta hai ki wo kisi async operation ke complete hone tak rendering ko delay kare aur fallback UI show kare.
Suspense sirf lazy loading ke liye nahi, balki data fetching, SSR streaming (like Next.js), aur async UI coordination ke liye bhi use hota hai.

✅ 4. Hydration 

ans => it is the process where the react attches event listener and interanl logic to the server rendered html 