const addGrocery = document.querySelector("#add-grocery-input");
const submitButton = document.querySelector("#submit-button");
const listContainer = document.querySelector("#list-container");

submitButton.addEventListener("click", event => {
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("list-item");
  rowDiv.innerHTML = `
        <input type="checkbox" id="in-basket" name="checkbox" />
        <div class="grocery-name">${addGrocery.value}</div>
        <div class="remove-list-item">X</div>
    `;
  const checkBox = document.querySelector("input[name=checkbox]");
  checkBox.addEventListener("change", event => {
    if (event.target.checked) {
      console.log("Miskit toimus");
    }
  });

  rowDiv.querySelector(".remove-list-item").addEventListener("click", event => {
    const currentRow = event.currentTarget.parentNode;
    currentRow.parentNode.removeChild(currentRow);
  });
  listContainer.append(rowDiv);
});
