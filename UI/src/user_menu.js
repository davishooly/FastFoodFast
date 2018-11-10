window.onload = function items(){

    fetch("https://fasty-v2.herokuapp.com/api/v2/menu",{
        method: "GET",
        headers : {
            "Content-Type": "application/json",
        }
    })
    .then(data => data.json())
    .then(food => {
        // store food items to local storage
        window.localStorage.setItem("food", JSON.stringify(food["Food items"]));
        let foodcontainer = document.querySelector(".meals-user");

        food["Food items"].forEach(fooditem=>{
            const markup = `
               <li>
                <div class="align well">
                    <div class="column-left">
                        <figure class="image-meals ">
                            <img src="../images/${fooditem.path}" alt="egg ">
                        </figure>
                    </div>
                    <div class="column-left">
                        <div class="margintop">
                         <p class="new-account-small">Name. ${fooditem.name}</p>
                            <p class="new-account-small">Price. ${fooditem.price}</p>
                            <p class="new-account-small">description. ${fooditem.description}</p>
                            <input type="submit" class="btn btn-blue btn-animated" onclick="add_to_cat(${fooditem.id})" value="place order">
                        </div>
                    </div>
                </div>
            `;
            foodcontainer.insertAdjacentHTML("beforeend", markup);
        });
    } );
};


