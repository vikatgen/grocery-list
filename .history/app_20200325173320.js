const addGrocery = document.querySelector("#add-grocery-input").value;
const submitButton = document.querySelector("#submit-button");
const listContainer = document.querySelector("#list-container");

submitButton.addEventListener("click", event => {
  if (addGrocery) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("list-item");
    rowDiv.innerHTML = `
        <div>${addGrocery}</div>
        <div class="remove-list-item">X</div>
    `;
    rowDiv
      .querySelector(".remove-list-item")
      .addEventListener("click", event => {
        const currentRow = event.currentTarget.parentNode.parentNode.removeChild(
          currentRow
        );
      });
    listContainer.append(rowDiv);
  }
});
