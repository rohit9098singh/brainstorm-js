function groupAnagrams(words) {
  const map = {};

  for (let word of words) {
    // step 1: sort word
    const key = word.split("").sort().join("");


    // step 2: group by key
    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(word);
  }

  console.log("whats at here ",map)

  // step 3: return only groups
  return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

