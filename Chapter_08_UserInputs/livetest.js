function normalizeJsBasicsLabel(label) {
  let prefix = "js-basic-";
  label = label.trim().replace(/[^a-zA-Z0-9]/g, " ").toLowerCase();
  let labels = label.split(" ");
  let newLabel="";
  for(let word of labels){
    newLabel = newLabel.trim()+" "+word.trim().replace(" ","");
  }
  console.log(newLabel);
  if(newLabel===" ")
    prefix = "js-basic"
  const result = prefix + newLabel.trim().replaceAll(" ","-");
  return result;
}

console.log(normalizeJsBasicsLabel(""));