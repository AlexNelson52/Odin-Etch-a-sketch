const grid = 860;
let rows = 16;
let columns = 16;

document.body.style.backgroundColor = "#2e2e2e"
const ButtonText = document.createElement("div");
document.body.appendChild(ButtonText)

const header = document.createElement("h1");
ButtonText.appendChild(header)
header.innerText = "Etch-a-Sketch"

const sizeButton = document.createElement('button')
ButtonText.appendChild(sizeButton)
sizeButton.innerText = "Change Size";
sizeButton.style.width = "100px"

const rgbButton = document.createElement("button")
ButtonText.appendChild(rgbButton)
rgbButton.innerText = "Rgb Colors"
rgbButton.style.width = "100px"

ButtonText.style.display = "flex"
ButtonText.style.flexDirection = "row"
ButtonText.style.alignItems = "center"
ButtonText.style.justifyContent = "center"
ButtonText.style.gap = "10px"

const drawArea = document.createElement("div");

document.body.appendChild(drawArea);
drawArea.id = "pixels"
drawArea.style.width = `${grid}px`;
drawArea.style.height = `${grid}px`;
drawArea.style.display = "flex"
drawArea.style.flexDirection = "row";
drawArea.style.margin = "100px auto"
drawArea.style.flexWrap = "wrap"

window.onload = function () {
  generatedGridcells(16, drawArea); // Loads Our first function at the start of page
  document.body.appendChild(drawArea); //adds drawArea to the body on start up
  rgbButton.addEventListener("click", () => { // Loads our random color button with update cells function with arguments of draw Area and RandomColor 
    updateCells(drawArea, randomColor); //calls updatecells with the argument drawArea, RandomColor Function
  }),
    sizeButton.addEventListener("click", () => { // adds the prompt button on start up
      return rowColumnChange1(prompt("select 1-100 for how many rows you would like"))
    })
};

function UserCellGrowth(userInput) {  // return please select a new number if User input is greater than 100
  if (userInput > 100) {
    return prompt("please Select a number 1-100")
  }
  childRemover(drawArea);     //Generates a new grid cell with the user input with the argument Parent Draw Area
  generatedGridcells(userInput, drawArea)
}

function childRemover(parent) { // ChildRemover with the parameter Parent with a while Loop of while parent.firstChild remove parent.firstChild 
  while (parent.firstChild) {
    parent.firstChild.remove()
  }
}

function generatedGridcells(gridSize, parentElement) {  //generates Gridcells with Gridsize from User input and the Elements Parent-line 50
  for (let i = 0; i < (gridSize ** 2); i++) {
    const rowAndColumn = document.createElement('div')
    rowAndColumn.style.width = `${(grid / gridSize) - 2}px`
    rowAndColumn.style.height = `${(grid / gridSize) - 2}px`
    rowAndColumn.classList.add('cell');
    rowAndColumn.style.backgroundColor = "white";
    rowAndColumn.style.border = "0.5px solid black"
    parentElement.appendChild(rowAndColumn)
    rowAndColumn.addEventListener("mouseover", () => {  // when your mouse is over the div it will make the cells black
      rowAndColumn.style.backgroundColor = "black";
    })

  }
}

function rowColumnChange1(userInput) {
  if (userInput > 100) {
    return rowColumnChange1(prompt("please Select a number 1-100"))
  }
  childRemover(drawArea); // Removes drawArea element
  generatedGridcells(userInput, drawArea); // takes userinput from prompt and goes with generatedGridCells function with the argument drawArea for the ParentElement
}

function updateCells(parentElement, func, arg = false) { //UpdateCells takes argument parentElement, func, arg = false
  clearEvents(parentElement); // uses clearEvents function from line - 114 with the parent element
  for (let child of parentElement.children) { //let child of the parentElement.children
    child.style.backgroundColor = "rgb(255, 255, 255)"; //styles child background
    child.addEventListener("mouseover", () => { //adds a mouseover event listener to the child element
      if (!arg) { // uses logical operator ! which if the out put is true will make it false
        child.style.backgroundColor = func(); //uses func arg as a function
      } else {
        child.style.backgroundColor = func(child.style.backgroundColor); //uses func arg as a function with a an argument to style the child background
      }
    })
  }
}

function clearEvents(parentElement) { //takes a parameter of the parentElement
  let cloneList = [];
  for (let child of parentElement.children) { // child of paraElement's children
    let clone = child.cloneNode(true);  // gives the variable clone data of child.cloneNode(true);
    cloneList.push(clone) // pushses the clone Variable to the cloneList array
  }
  childRemover(parentElement) //removes the child of the parent element
  for (let clone of cloneList) { //clone from inside the Clonelist array append child from the parentElement parameter
    parentElement.appendChild(clone)
  }

}

function randomColor() {
  let generateRandomValue = () => { return Math.floor(Math.random() * 256) };
  return `rgb(${generateRandomValue()},${generateRandomValue()},${generateRandomValue()})`;
}
