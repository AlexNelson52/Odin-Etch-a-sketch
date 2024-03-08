const grid = 960;
let rows = 16;
let columns = 16;

document.body.style.backgroundColor = "#2e2e2e"
const ButtonText = document.createElement("div");

document.body.appendChild(ButtonText)
const sizeButton = document.createElement('button')

ButtonText.appendChild(sizeButton)
sizeButton.innerText = "click";



const drawArea = document.createElement("div");


document.body.appendChild(drawArea);
drawArea.id = "pixels"
const multipleDiv = document.querySelector("pixles")
drawArea.style.width = `${grid}px`;
drawArea.style.height = `${grid}px`;

window.onload = function () {
  rowColumn();
};






function rowColumn() {
  for (let i = 0; i < (rows * columns); i++) {
    const rowAndColumn = document.createElement('div')
    rowAndColumn.style.width = `${(grid / columns) - 2}px`
    rowAndColumn.style.height = `${(grid / rows) - 2}px`
    rowAndColumn.classList.add('cell');
    rowAndColumn.style.backgroundColor = "white";
    rowAndColumn.style.border = "1px solid black"
    drawArea.appendChild(rowAndColumn)
    rowAndColumn.addEventListener("mouseover", () => {
      rowAndColumn.style.backgroundColor = "black";
    })
    const eventRemove = () => {
      drawArea.removeChild(rowAndColumn);
      sizeButton.removeEventListener("click", eventRemove)
    }

    sizeButton.addEventListener("click", eventRemove);

  }
}








sizeButton.addEventListener("click", () => {
  return rowColumnChange1(prompt("select 1-100 for how many rows you would like"))
})

function rowColumnChange1(userInput) {
  if (userInput > 100) {
    return prompt("please Select a number 1-100")
  }

  for (let i = 0; i < (userInput * userInput); i++) {
    const rowAndColumnChange = document.createElement('div');
    rowAndColumnChange.style.width = `${(grid / userInput) - 2}px`
    rowAndColumnChange.style.height = `${(grid / userInput) - 2}px`
    rowAndColumnChange.classList.add('cell');
    rowAndColumnChange.style.backgroundColor = "white";
    rowAndColumnChange.style.border = "1px solid black"

    drawArea.appendChild(rowAndColumnChange)
    rowAndColumnChange.addEventListener("mouseover", () => {
      rowAndColumnChange.style.backgroundColor = "black";
    })
    sizeButton.addEventListener("click", () => {
      drawArea.removeChild(rowAndColumnChange)
    })

  }
}




drawArea.style.display = "flex"
drawArea.style.flexDirection = "row";
drawArea.style.margin = "100px auto"
drawArea.style.flexWrap = "wrap"

