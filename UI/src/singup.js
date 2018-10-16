const signup = document.querySelector("#signup_form");

signup.addEventListener("submit", event => {
    event.preventDefault();  //method prevents browser default actions/behavoiur

    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    console.log(username);
    console.log(email);
    console.log(password);

    let signup_url = "https://fasty-v2.herokuapp.com/api/v2/auth/signup";

    let promise =  fetch(signup_url,{
    method : "POST",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
    username: username,
    email: email,
    password: password
    })
    } );
    promise.then(getData);
    function getData(data){
        console.log(data);
    }
} );