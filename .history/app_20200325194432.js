const addGrocery = document.querySelector("#add-grocery-input");
const submitButton = document.querySelector("#submit-button");
const listContainer = document.querySelector("#list-container");
submitButton.addEventListener("click", event => {
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("list-item");
  rowDiv.innerHTML = `
        <button id="in-basket"></button>
        <div class="grocery-name">${addGrocery.value}</div>
        <div class="remove-list-item">X</div>
    `;

  let groceryName = document.querySelector(".grocery-name");

  rowDiv.querySelector(".remove-list-item").addEventListener("click", event => {
    const currentRow = event.currentTarget.parentNode;
    currentRow.parentNode.removeChild(currentRow);
  });

  listContainer.append(rowDiv);

  checkbox.addEventListener("change", event => {
    groceryName.style.textDecoration = "line-through";
  });
});
