const addGrocery = document.querySelector("#add-grocery-input");
const submitButton = document.querySelector("#submit-button");
const listContainer = document.querySelector("#list-container");

submitButton.addEventListener("click", event => {
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("list-item");
  rowDiv.innerHTML = `
        <input type="submit" id="in-basket" value=""/>
        <div class="grocery-name">${addGrocery.value}</div>
        <div class="remove-list-item">X</div>
    `;

  const toggleButton = rowDiv.querySelector("#in-basket");
  const listItemName = rowDiv.querySelector(".grocery-name");
  toggleButton.onclick = function() {
    const isInBasket = listItemName.style.textDecoration == "initial";
    listItemName.style.textDecoration = isInBasket ? "line-through" : "initial";
  };

  rowDiv.querySelector(".remove-list-item").addEventListener("click", event => {
    const currentRow = event.currentTarget.parentNode;
    currentRow.parentNode.removeChild(currentRow);
  });

  listContainer.append(rowDiv);
});
