// with ts 
let controller: AbortController | undefined;

async function searchUsers(query: string): Promise<void> {
  if (controller) {
    controller.abort();
  }

  controller = new AbortController();

  try {
    const res = await fetch(
      `/api/search?q=${query}`,
      { signal: controller.signal }
    );

    const data = await res.json();
    console.log(data);
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      console.log("Previous search cancelled");
    } else {
      console.error(err);
    }
  }
}

// without ts 

// let controller;

// async function searchUsers(query) {
//   if (controller) {
//     controller.abort(); // previous request cancel
//   }

//   controller = new AbortController();

//   try {
//     const res = await fetch(
//       `/api/search?q=${query}`,
//       { signal: controller.signal }
//     );

//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     if (err.name === "AbortError") {
//       console.log("Previous search cancelled");
//     } else {
//       console.error(err);
//     }
//   }
// }

