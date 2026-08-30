function isValidJsBasicsIdentifier(name) {
  const reservedKeys = ["let", "const", "var", "class", "function", "return"];
  let revName = name.trim().toLowerCase().split("").reverse().join("");
  if (name.trim() === "")
    return false;
  if(reservedKeys.includes(name))

  if (reservedKeys.includes(revName))
    return false;

  const pattern = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/; 
  let result = pattern.test(name) ? true : false;
  return result;
}

console.log(isValidJsBasicsIdentifier("let"));


function filterSupportedJsBasicsTopics(topics) {
  const expectedTopicsArr = ["node", "v8", "npm"];
  let loweredUniqueTopicsArr=[...new Set(topics)];
  loweredUniqueTopicsArr = topics.map(a => a.trim().toLowerCase()).filter(a => !(loweredUniqueTopicsArr.includes(a)));
  console.log(loweredUniqueTopicsArr);
//   .filter(a => expectedTopicsArr.includes(a));
  return loweredUniqueTopicsArr;
}

console.log(filterSupportedJsBasicsTopics(["node","runtime","node"]));