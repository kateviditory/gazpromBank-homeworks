//Задание 1
const child = document.getElementsByClassName("deepChild")[0];
const blockName = document.getElementsByClassName("blockName")[0];

colorElem = elem => {
  elem.style.border = "2px solid #" + Math.floor(Math.random() * 16777215).toString(16);
};

catchParent = child => {
  colorElem(child);
  const parent = child.parentElement;
  const parentClass = parent.getAttribute("class");

  if (parentClass === "parent") {
    setTimeout(() => {
      blockName.innerHTML = parent.tagName;
      colorElem(parent);
    }, 500);
  } else {
    setTimeout(() => {
      blockName.innerHTML = parent.tagName;
      colorElem(parent);
      catchParent(parent);
    }, 500);
  }
};

// catchParent(child);

// Задание 2
upStyle = elem => {
  elem.style.border = "2px solid red";
};

downStyle = elem => {
  elem.style.border = "2px solid green";
};

const firstSibling = document.getElementsByClassName("sibling first")[0];
const firstDeepChild = firstSibling.getElementsByClassName("deepChild")[0];

lowerElement = elem => {
  downStyle(elem);
  const child = elem.children[0];
  const attr = child.getAttribute("class");
  if (attr !== "deepChild") {
    setTimeout(() => {
      downStyle(child);
      lowerElement(child);
    }, 500);
  } else {
    setTimeout(() => {
      downStyle(child);
    }, 500);
  }
};

upperElement = elem => {
  upStyle(elem);
  const parent = elem.parentElement;
  const attr = parent.getAttribute("class");
  if (attr !== "sibling first") {
    setTimeout(() => {
      upStyle(parent);
      upperElement(parent);
    }, 500);
  } else {
    setTimeout(() => {
      upStyle(parent);
      const secondSibling = parent.nextElementSibling;
      lowerElement(secondSibling);
    }, 500);
  }
};

// upperElement(firstDeepChild);

//Задание 2*

const dataTable = [
  {
    name: "name1",
    value: "1"
  },
  {
    name: "name2",
    value: "2"
  },
  {
    name: "name3",
    value: "3"
  },
  {
    name: "name4",
    value: "4"
  }
];

let table = "";

dataTable.forEach(elem => {
  table += "<tr><td>" + elem.name + "</td><td>" + elem.value + "</td></tr>";
});
table = "<table><tbody>" + table + "</tbody></table>";

let tableElement = document.createElement("table");
tableElement.innerHTML = table;

// document.body.appendChild(tableElement);
