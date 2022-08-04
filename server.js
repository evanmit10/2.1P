const express = require("express")
const app = express()
require("dotenv").config();
const bodyParser = require("body-parser")
const https = require("https")

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res)=> {
    res.sendFile(__dirname+"/index.html")
})

app.post("/", (req,res)=> {
    apikey = "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"
    var email = req.body.email
    console.log(email)

    

    const sgMail = require("@sendgrid/mail");

            sgMail.setApiKey(apikey);

            const sendMail = async (msg) => {
            try{
                await sgMail.send(msg);
                console.log("Message send successfully");
            } catch (error) {
                console.error(error);

                if (error.response) {
                    console.error(error.response.body);
                }
            }
        }
            sendMail({
                to: email,
                from: "enodejs123@gmail.com",
                subject: "Welcome!",
                text: "Welcome to our site!"
            });
        }
    

)



app.listen(7070, function(){
    console.log("server running")
})