
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
        let return_value = await page.evaluate(()=>{
               let doc = document.querySelector(".message").innerHTML;
               return doc === "enter valid username, username does not exist";
        })
        expect(return_value).toBe(true);
    });

    it("test login with incorrect password", async () =>{

        await page.type(username_input, user.username);
        await page.type(userpassword_input, "Kimame3435");

        await page.click(loginButton);
        await page.waitFor(3000);

        let return_value = await page.evaluate(()=>{
            let doc = document.querySelector(".message").innerHTML;
            return doc === "enter correct password";
        })
        expect(return_value).toBe(true);
        await page.reload(100);
    });

    it("test login with valid details", async() =>{

        await page.type(username_input, user.username);
        await page.type(userpassword_input, user.password);

        await page.click(loginButton);

        await page.waitFor(3000);

        const menuTitle = await page.title();
        expect(menuTitle).toBe("Fast-Menu");
    });
})