const addGrocery = document.querySelector("#add-grocery-input").value;
console.log(addGrocery);
const submitButton = document.querySelector("#submit-button");
const listContainer = document.querySelector("#list-container");

submitButton.addEventListener("click", event => {
  if (addGrocery) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("list-item");
    rowDiv.innerHTML = `
        <div>${addGrocery}</div>
    `;
    listContainer.append(rowDiv);
  }
});
