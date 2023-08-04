const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

function error(input, message) {
  username.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}

function success(input) {
  username.className = "form-control is-valid";
}

function checkemail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value)) {
    success(input);
  } else {
    error(input, "Hatalı email girdiniz");
  }
}
const validateEmail = (email) => {
  return String(email).toLowerCase().match();
};
function checkRequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} is required`);
    } else {
      success(input);
    }
  });
}

function checkLenght(input, min, max) {
  if (input.value.lenght < min) {
    error(input, `${input.id} en az ${min} karakter olmalıdır.`);
  } else if (input.value.lenght > max) {
    error(input, `${input.id} en az ${max} karakter olmalıdır.`);
  } else {
    success(input);
  }
}
function checkPasswords(input1, input2) {
  if (input1.value != input2.value) {
    error(input2, "Parolalar eşleşmiyor");
  }
}

function checkPhone(input) {
  var exp = /^\d{10}$/;
  if (!exp.test(input.value)) error(input, "Telefon 10 karakterli olmalıdır.");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, repassword, phone]);
  checkemail(email);
  checkLenght();
  checkLenght(username, 7, 15);
  password(password, 7, 12);
  checkPasswords(password, repassword);
  checkPhone(phone);
});
