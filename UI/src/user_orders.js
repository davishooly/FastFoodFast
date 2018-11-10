window.onload = function items(){
    let token = window.localStorage.getItem("token");

    fetch("https://fasty-v2.herokuapp.com/api/v2/users/orders",{
        method: "GET",
        headers : {
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}`

        }
    })
    .then(data => data.json())
    .then(orders => {

        let order_container = document.querySelector(".dig");

        orders["order history"].forEach(orderItem=>{
               const orders =`
               <div class="rows">
                <div class="history__item desc_header">${orderItem.id}</div>
                <div class="history__item desc_header">${orderItem.name}</div>
                <div class="history__item desc_header ">${orderItem.date.split(" ")[0]}</div>
                <div class="history__item desc_header ">${orderItem.Quanity}</div>
                <div class="history__item desc_header ">${orderItem.status}</div>
                <div class="history__item desc_header ">${orderItem.destination}</div>
                </div>
            `;
            order_container.insertAdjacentHTML("beforeend", orders);
        });

        })
    .catch(err => {
           console.log(err);
    })
};


