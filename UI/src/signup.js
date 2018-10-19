const signup = document.querySelector("#signup_form");

signup.addEventListener("submit", event => {
    event.preventDefault();  //method prevents browser default actions/behavoiur

    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let signup_url = "https://fasty-v2.herokuapp.com/api/v2/auth/signup";

    fetch(signup_url,{
    method : "POST",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
    username: username,
    email: email,
    password: password
    })
    })
    .then(response => response.json()) //.json() also returns a promise
    .then(data => {
         let message = data.message;
         console.log(message);

        if (data.message === "username must be a string"){
            document.querySelector(".message").innerHTML = "username must be a string";
            document.querySelector(".message").style.color = 'red';
        }

        if (data.message === "enter valid email"){
            document.querySelector(".message").innerHTML = "Enter valid email";
            document.querySelector(".message").style.color = 'red';
        }

        if (data.message === "password should start with a capital letter and include a number"){
            document.querySelector(".message").innerHTML = "password should start with a capital letter and must include a number";
            document.querySelector(".message").style.color = 'red';
        }

        if (data.message === `user ${username} already exists`){
            document.querySelector(".message").innerHTML = `user with username  ${username} already exists`;
            document.querySelector(".message").style.color = 'red';
        }
        if (data.message === `user with ${email} already exists`){
            document.querySelector(".message").innerHTML = `email ${email} already exists`;
            document.querySelector(".message").style.color = 'red';
        }
        if (data.message === `user ${username} created successfully`){
            document.querySelector(".message").innerHTML = `Account for ${username} created sucessfully`;
            document.querySelector(".message").style.color = 'green';
            window.location.assign("login.html");
        }
    });
});