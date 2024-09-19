const resultBox = document.querySelector(".result-box");
const equalBtn = document.querySelector(".equal-to");
const buttons = document.querySelector(".buttons");
const deleteBtn = document.querySelector(".delete");
const deleteAllBtn = document.querySelector(".delete-all");
let value = "";

buttons.addEventListener("click", showAnswer);
deleteAllBtn.addEventListener("click", deleteAllText);
equalBtn.addEventListener("click", calculate);

function showAnswer(e) {
  if (!e.target.classList.contains("buttons")) {
    if (resultBox.textContent === "") {
      value += checkOpertor(e.target.textContent);
      resultBox.textContent = value;
    } else {
      value += checkOpertor(e.target.textContent);
      resultBox.textContent = value;
    }
  }
}

function checkOpertor(target) {
  let result;

  if (target.includes("x")) {
    result = "*";
  } else if (target.includes("÷")) {
    result = "/";
  } else {
    result = target;
  }

  return result;
}

deleteBtn.onclick = (e) => {
  deleteLastText(value);
  e.stopPropagation();
};

function deleteLastText(param) {
  if (param.length > 0) {
    const strArr = value.split("");
    strArr.pop();

    value = strArr.join("");
    resultBox.textContent = value;
  }
}

function deleteAllText(e) {
  value = "";
  resultBox.textContent = value;

  e.stopPropagation();
}

function calculate(e) {
  const text = eval(value);
  value = text;
  resultBox.textContent = value;

  e.stopPropagation();
}
