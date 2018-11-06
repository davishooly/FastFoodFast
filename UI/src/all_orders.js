window.onload = function orders() {

    let token = window.localStorage.getItem('token');

    fetch("https://fasty-v2.herokuapp.com/api/v2/orders",{
        Method: "GET",
        headers : {
            "Content-Type": "application/json",
             Authorization: `Bearer ${token}`
        }
    }).then(data => data.json())
    .then(data => {

        console.log(data.message[0]);

        let order_container = document.querySelector(".all");

        data["message"].forEach(element => {

            const order = `
            <div class="rows">
                            <div class="history__item desc_header">${element.id}</div>
                            <div class="history__item desc_header">${element.name}</div>
                            <div class="history__item desc_header">${element.Quanity}</div>
                            <div class="history__item desc_header ">${element.date.split(" ")[0]}</div>
                            <div class="history__item desc_header ">${element.destination}</div>
                            <div class="history__item desc_header ">${element.orderd_by}</div>
                            <div class="history__item">
                            <div class="accept_order">
                                <i class="fa fa-check-circle btn-accept"></i>
                                <i class="fa fa-times-circle btn-reject"></i>
                            </div>
                        </div>
                        `;
            order_container.insertAdjacentHTML("beforeend", order);
        });

    });
};