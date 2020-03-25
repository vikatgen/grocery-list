const addGrocery = document.querySelector("#add-grocery-input");
const submitButton = document.querySelector("#submit-button");
const listContainer = document.querySelector("#list-container");

submitButton.addEventListener("click", event => {
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("list-item");
  rowDiv.innerHTML = `
        <div class="grocery-name">${addGrocery}</div>
        <div class="remove-list-item">X</div>
    `;
  rowDiv.querySelector(".remove-list-item").addEventListener("click", event => {
    const currentRow = event.currentTarget.parentNode;
    currentRow.parentNode.removeChild(currentRow);
  });
  listContainer.append(rowDiv);
});
