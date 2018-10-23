window.onload = function items(){
    let token = window.localStorage.getItem("token");

    fetch("https://fasty-v2.herokuapp.com/api/v2/menu",{
        method: "GET",
        headers : {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        }
    })
    .then(data => data.json())
    .then(food => {
        console.log(food);

        let foodcontainer = document.querySelector(".meals");

        food["Food Items"].forEach(fooditem=>{
            const markup = `
                <div>
                    <p class="new-account-small">Price. 450ksh</p>
                </div>
                <div>
                    <input type="submit" class="btn btn-blue btn-animated" value="Edit">
                    <input type="submit" class="btn btn-orange-small btn-animated" value="delete">
                </div>
                <div class="food_items">
            `
        });
    } );
}
