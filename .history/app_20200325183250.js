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
  let inBasket = rowDiv.querySelector(".grocery-name");

  rowDiv
    .querySelector("input[name=checkbox]")
    .addEventListener("change", event => {
      if (event.checked) {
        inBasket.style.textDecoration = "line-through";
      } else {
        inBasket.style.textDecoration = "none";
      }
    });
  //   if (inBasketButton.checked) {
  //     let groceryName = document.querySelector(".grocery-name");
  //     groceryName.style.textDecoration = "line-through";
  //   }

  rowDiv.querySelector(".remove-list-item").addEventListener("click", event => {
    const currentRow = event.currentTarget.parentNode;
    currentRow.parentNode.removeChild(currentRow);
  });
  listContainer.append(rowDiv);
});
