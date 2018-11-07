window.onload = function items(){

    fetch("https://fasty-v2.herokuapp.com/api/v2/menu",{
        method: "GET",
        headers : {
            "Content-Type": "application/json",
        }
    })
    .then(data => data.json())
    .then(food => {


        let foodcontainer = document.querySelector(".meals");
        let buttonContainer = document.querySelector(".pagination");

        let four = [];

        let four_foods = food["Food items"].slice(0,4);
        four.push(four_foods);

        let second_four = [];
        console.log(four);

        for (let i in four_foods){
            i = parseInt(i);
                const btn = `<button id="btn_pagination">${i+1}</button>`;
                buttonContainer.insertAdjacentHTML("afterend", btn);

        }
        four_foods.forEach(fooditem=>{
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





