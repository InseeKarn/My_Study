const express = require("express");
const app = express();
const PORT = 3000;
// Practice
// ข้อ 1
let me = { name: "Insee", age: 18, hobby: "Coding" }
// console.log(me.name + " " + me.Age + " " + me.hobby);
// ข้อ 2
/* แบบฝึกหัด:
ลองจินตนาการว่าเว็บ/แอปของคุณเป็นร้าน แล้วลูกค้าส่งคำสั่งซื้อแบบ GET, POST จะเกิดอะไรขึ้น 
get คำสั่งซื้อจะสามารถ ดึงข้อมูลคำสั่งซื้ออกมาได้ post จะใส่คำสั่งซื้อเข้าไปได้
*/
// ข้อ 3
// const http = require("http");
// const server = http.createServer((req,res) => {
//     if (req.url === "/"){
//         res.write("Hello Insee")
//         res.end()
//     }
// })

// server.listen(3000)

// ข้อ 4
let hobby = { 1 : "Basketball", 2 : "Coding"}
let hobbies = []

app.use(express.json())
app.post("/add", (req,res) =>{
    const data = req.body.hobby;
    hobbies.push(data);
    res.json({
        message: "Recieved data",
        received: hobbies
    })
})

app.get("/hobbies", (req,res) => {
    res.json(hobbies);
});


app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT)
});

fetch("http://localhost:3000/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hobby })
})
.then(res => res.json())
.then(data => console.log(data))
// Practice


