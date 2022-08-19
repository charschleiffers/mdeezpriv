// document.getElementbyId("count").innerText=20

let cookies = document.getElementById("cookies")

console.log(cookies)

let count = 0 

function increment() {
    count = count + 1
    cookies.innerText = count
}