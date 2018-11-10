const PAGE = PATH + "add-food.html";
describe("test add food item", ()=>{
    let addfood_button = ("#food_button"),
        food_name = ("#name"),
        food_description = ("#description"),
        food_price = ("#price");

        food ={
            name:"kuku",
            description:"tasty and crunchy",
            price: 155
        };

        beforeAll(async ()=>{
            await page.goto(PAGE,{
                     waitUntil:"domcontentloaded"
            })
        });
        it("tests empty fields",async()=>{
            await page.click(addfood_button);
            await page.waitFor(3000);

            await page.screenshot({
                path:"test-3.png"
            })
        let return_value = await page.evaluate(()=>{
            let doc = document.querySelector(".message").innerHTML;
            return doc === "user with username kims already exists";
        })
        expect(return_value).toBe(true);
        })
})