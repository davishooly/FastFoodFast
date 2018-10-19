// include jwt-decode to decode base64url encoded tokens("only text")
const decoded = require("jwt-decode");
const login =  document.querySelector("#login_form");


// first i have to listen for an event
login.addEventListener("submit", event => {
    event.preventDefault();

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    // get url from resource heroku
    let login_url ="https://fasty-v2.herokuapp.com/api/v2/auth/login";

    //use fetch method to get response after post login
    // fetch method returns a promise that .then() will resolve depending on the status fo the responce
    fetch(login_url,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(response => response.json())  // also a promise that returns a response
        .then(data => {
            // get message
            let message = data.message;
            // get token
            let token = data.token;

            if( message === "user not found"){
                document.querySelector(".message").innerHTML = "enter valid username, username does not exist";
                document.querySelector(".message").style.color= "red";
            }

            if( message === "incorrect password"){
                document.querySelector(".message").innerHTML = "enter correct password";
                document.querySelector(".message").style.color= "red";
            }

            if(message === "successfully logged"){
                window.localStorage.setItem("token", token);
                document.querySelector(".message").innerHTML = "successfully logged in";
                document.querySelector(".message").style.color= "green";
                let role = decoded(token).identity.is_admin;

                if(role){
                    window.location.assign("dashboard.html");
                }
                else{
                    window.location.assign("users.html");
                }
            }
        });
});
