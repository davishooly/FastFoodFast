
const PAGE = PATH + "login.html";

describe("login page", () => {
    let loginButton = "#login_btn",
        username_input = "#username",
        userpassword_input = "#password",
        user = {
            username: "kims",
            password: "Kimame123"
       };

    beforeAll( async () => {
        await page.goto(PAGE,{
            waitUntil:"domcontentloaded"
        })
    });
    it("test login button click",async ()=>{
        await page.click(loginButton);
        await page.waitFor(3000);

        // page evaluation
        // await page.screenshot({
        //     path:"test-1.png"
        // });

        let return_value = await page.evaluate(()=>{
               let doc = document.querySelector(".message").innerHTML;
               return doc === "enter valid username, username does not exist";
        })
        expect(return_value).toBe(true);
    });


    it("test login with valid details", async() =>{

        await page.type(username_input, user.username);
        await page.type(userpassword_input, user.password);

        await page.click(loginButton);

        await page.waitFor(3000);

        // await page.screenshot({
        //     path:"test-2.png"
        // })

        const menuTitle = await page.title();

        expect(menuTitle).toBe("Fast-Menu");

    });
})