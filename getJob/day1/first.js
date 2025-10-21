// 1) var, let, और const में फर्क example के साथ बताओ।

// 2)नीचे का कोड क्या आउटपुट देगा और क्यों?
    console.log(a);
    var a = 10;
    let b = 20;
    console.log(b);

// undefined and 20

//3) Event Loop और Call Stack का काम कैसे होता है, एक छोटा example देकर explain करो।

    console.log("start");
    setTimeout(() => {
    console.log("time out function ");
    }, 3000);

    console.log("end");

//4) Shallow copy और Deep copy का example दो, और JS में deep copy बनाने के दो तरीके बताओ।

    const arr=[1,2,[3,4]];

    const shallowCopy=[...arr]
    shallowCopy[2][0]=100;

    console.log("this is the shallow copy with changed value",shallowCopy);

//==
    const arr2=[1,2,[33,34]];
    
    let deepCopy=JSON.parse(JSON.stringify(arr2));
    deepCopy[2][0]=20;
    console.log("this is the deepcopy without the changed value",deepCopy)

    let deepCopy2=structuredClone(arr2);
    deepCopy2[2][0]=30
    console.log("second way of deep copy",deepCopy2)

    console.log("original array",arr2)

//5)   नीचे का कोड ठीक करो ताकि ये सही आउटपुट दे:

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Expected Output: 0 1 2

// 6 अगर तुम्हारे पास एक बहुत बड़ा list render करना है, तो performance improve करने के 3 तरीके बताओ।
 
// 1) Virtualization (Windowing)
//     पूरी list एक साथ render करने के बजाय सिर्फ viewport में दिखने वाले items render करना।

// 2)  Memoization और Pure Components

//     अगर list items के props नहीं बदलते, तो React.memo का इस्तेमाल करके unnecessary re-renders रोकना।

//     साथ ही expensive calculations के लिए useMemo और stable callbacks के लिए useCallback

// 3)3. Pagination या Lazy Loading

