function handleFormSubmission(event) {
  event.preventDefault();

  // v1
  // const form = event.target;
  // const usernameInput = form[0].value;
  // const passwordInput = form[1].value;

  // v2
  const usernameInput = document.querySelector("input[name=username]").value;
  const passwordInput = document.querySelector("input[name=password]").value;

  const loginData = {
    username: usernameInput,
    password: passwordInput
  };

  console.log(loginData);
}
