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

        let default_menu = food["Food items"].slice(0,4);

        for (let i =0; i<(food["Food items"].length/4); i++){
            i = parseInt(i);
            if(food["Food items"].length>4){
                const btn = `<button onclick="getPage(${i+1})" id="btn_pagination">${i+1}</button>`;
                buttonContainer.insertAdjacentHTML("afterend", btn);
            }
        }
        default_menu.forEach(fooditem=>{
            const markup = `
                 <li>
                <figure class="meals-image ">
                    <img src="../images/${fooditem.path} " alt="egg ">
                </figure>
                <div>
                    <p class="new-account-small">${fooditem.name}</p>
                    <p class="new-account-small">${fooditem.price}.Kshs</p>
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







