const add_food = document.querySelector("#add_food");


add_food.addEventListener("submit", event => {
    event.preventDefault()

    let name = document.querySelector("#name").value;
    let description = document.querySelector("#description").value;
    let path = document.querySelector("#image").files[0].name;
    let price = document.querySelector("#price").value;
    let token = window.localStorage.getItem("token");

    fetch("https://fasty-v2.herokuapp.com/api/v2/menu",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            name: name,
            description: description,
            path:path,
            price:price
        })
    })
    .then(response => response.json())
    .then(data =>{
            console.log(data);

            let message = data.message;
            if( message === "foodname must be a string"){
                document.querySelector('.message').innerHTML = "Enter valid food name";
                document.querySelector('.message').style.color= 'red';
            }
            if (message === "description must contain alphanumeric characters only"){
                document.querySelector(".desc"). innerHTML = "description must contain alphanumeric characters only";
                document.querySelector('.desc').style.color= 'red';
            }
            if(message === "food item already exists"){
                document.querySelector(".created"). innerHTML = "foodname already exists";
                document.querySelector('.created').style.color= 'red';
            }
            if( message === "Food item created successfully"){
                document.querySelector(".created"). innerHTML = "Food item created successfully";
                document.querySelector('.created').style.color= 'green';
                setTimeout(()=>{
                   location.reload();
                }, 2000);

            }
        });
});