function acceptValues(arr, ul) {
  let arrayObjects = [];
  let simpleObjects = [];

  arr.forEach(function (value) {
    if (Array.isArray(value)) {
      arrayObjects.push(value);
      generateNodes(value, ul);
    } else {
      simpleObjects.push(value);
      generateNodesSimple(value, ul);
    }

    document.body.append(ul);
  });

  console.log("Array of internal arrays:");
  console.log(arrayObjects);
  console.log("Array of simple objects:");
  console.log(simpleObjects);
}

function generateNodesSimple(el, ulPar) {
  let li = document.createElement("li");
  li.innerText = el;
  ulPar.append(li);
}

function generateNodes(arr, ul) {
  let ulInternal = document.createElement("ul");
  arr.forEach((value) => {
    generateNodesSimple(value, ulInternal);
  });
  ul.append(ulInternal);

}

const exampleArr = [10, 12, [13, 10, 1], ['a', 'b'], 15];
console.log(exampleArr);
let ulMajor = document.createElement("ul");
acceptValues(exampleArr, ulMajor);