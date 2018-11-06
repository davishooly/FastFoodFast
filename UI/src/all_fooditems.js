window.onload = function items(){

    fetch("https://fasty-v2.herokuapp.com/api/v2/menu",{
        method: "GET",
        headers : {
            "Content-Type": "application/json",
        }
    })
    .then(data => data.json())
    .then(food => {

        console.log(food.message);

        let foodcontainer = document.querySelector(".meals");

        food["Food items"].forEach(fooditem=>{
            const markup = `
                 <li>
                <figure class="meals-image ">
                    <img src="../images/${fooditem.path} " alt="egg ">
                </figure>
                <div>
                    <p class="new-account-small">${fooditem.name}</p>
                    <p class="new-account-small">${fooditem.price}</p>
                    <p class="new-account-small">${fooditem.date.split(" ")[0]}</p>
                    <p class="new-account-small">${fooditem.description}</p>
                </div>
                <div>
                    <input type="submit" class="btn btn-blue btn-animated" value="Edit">
                    <input type="submit" class="btn btn-orange-small btn-animated" onclick="delete_menu(${fooditem.id})" value="delete">
                </div>
            </li>
            `;
            foodcontainer.insertAdjacentHTML("beforeend", markup);
        });
    });
};





