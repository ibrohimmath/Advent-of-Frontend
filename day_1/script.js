const nameInput = document.querySelector("#user_name");
const nameInputParent = nameInput.parentElement;

const memories = document.querySelector("#user_text");

const backend = document.querySelector("#backend_learn");
const frontend = document.querySelector("#frontend_learn");

const form = document.querySelector("form");

let userName = "";

const debounce = (fn, timeout = 1000) => {
  let id;

  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
};

const updateUserName = debounce(function (e) {
  userName = e.target.value;

  if (nameInputParent.children.length <= 1) {
    const pSibling = document.createElement("p");
    pSibling.innerHTML = "<i>" + userName + "</i>";
    nameInputParent.appendChild(pSibling);
  } else {
    nameInputParent.children[1].innerHTML = "<i>" + userName + "</i>";
  }

}, 250);

nameInput.addEventListener("input", updateUserName);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});
