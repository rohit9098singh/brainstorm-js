JSON.stringify

Converts a JavaScript object/array → into a JSON string.

Example:
const obj = { name: "Rohit", age: 20 };
const str = JSON.stringify(obj);
console.log(str); // '{"name":"Rohit","age":20}'  (string)


JSON.parse

Converts a JSON string → back into a JavaScript object/array.

Example:
const str = '{"name":"Rohit","age":20}';
const obj = JSON.parse(str);
console.log(obj); // { name: "Rohit", age: 20 } (object)



how can we avoid event bubbling and capturing?
    e.stopPropagation() → stops the event from bubbling up or capturing down.
    e.stopImmediatePropagation() → same as above, but also stops other listeners on the same element.