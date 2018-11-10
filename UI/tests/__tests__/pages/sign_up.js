const PAGE = PATH + "signup.html";
describe("sign_up page",() => {

     let signup_button = "#sign_up",
         username = "#username",
         email = "#email",
         password = "#password";         user={
             name:"kims",
             email:"dryspell@gmail.com",
             password:"Dryspell123"
         };

    beforeAll( async () => {
        await page.goto(PAGE,{
            waitUntil:"domcontentloaded"
        })
        } );

        it("test singup", async () =>{
        await page.click(signup_button);
        await page.waitFor(3000);

           let return_value = await page.evaluate(()=>{
            let doc = document.querySelector(".message").innerHTML;
            return doc === "username must be a string";
        })
        expect(return_value).toBe(true);
        })

         it("test invalid email", async () =>{
            await page.type(username, user.name);
            await page.type(email, "kim@gmail")
            await page.click(signup_button);
            await page.waitFor(3000);


           let return_value = await page.evaluate(()=>{
            let doc = document.querySelector(".message").innerHTML;
            return doc === "Enter valid email";
        })

        expect(return_value).toBe(true);
         await page.reload(100);
        })

        it("test invalid password", async () =>{
            await page.type(username, user.name);
            await page.type(email, user.email);
            await page.type(password, "davido");

            await page.click(signup_button);
            await page.waitFor(3000);

           let return_value = await page.evaluate(()=>{
            let doc = document.querySelector(".message").innerHTML;
            return doc === "password should start with a capital letter and must include a number";
        })

        expect(return_value).toBe(true);
        await page.reload(100);
        })

        it("test username already exist", async () =>{
            await page.type(username, user.name);
            await page.type(email, user.email)
            await page.type(password, user.password)
            await page.click(signup_button);
            await page.waitFor(3000);

           let return_value = await page.evaluate(()=>{
            let doc = document.querySelector(".message").innerHTML;
            return doc === "user with username kims already exists";
        })
        //  expect(return_value).toBe(true);
        })
});