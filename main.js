//select all elements

let allSpan = document.querySelectorAll(".buttons span");

let results = document.querySelector(".results > span");

let theInput = document.getElementById("the-input");

allSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }

    if (e.target.classList.contains("add-item")) {
      addItem();
    }

    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }

    if (e.target.classList.contains("show-items")) {
      showItems();
    }
  });
});

function showmassege() {
  if (theInput.value === "") {
    results.innerHTML = "the input cant be empty";
  }
}
function checkItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `found local storage item called <span>${theInput.value}</span>`;
    } else {
      results.innerHTML = `No local storage item with the name <span>${theInput.value}</span>`;
    }
  } else {
    showmassege();
  }
}

function addItem() {
  if (theInput.value !== "") {
    localStorage.setItem(theInput.value, "test");

    results.innerHTML = `local storage item <span>${theInput.value}</span> added`;

    theInput.value = "";
  } else {
    showmassege();
  }
}

function deleteItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);

      results.innerHTML = ` local storage item <span>${theInput.value}</span> deleted`;

      theInput.value = "";
    } else {
      results.innerHTML = `No local storage item with the name <span>${theInput.value}</span>`;
    }
  } else {
    showmassege();
  }
}

function showItems() {
  if (localStorage.length) {
    // console.log(`found elements ${localStorage.length}`);
    results.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class='keys'>${key}  </span>`;
    }
  } else {
    results.innerHTML = `local storage is empty`;
  }
}
