let button = document.getElementById("alert");
let button2 = document.getElementById("somme");

button.addEventListener("click", () => alert("click"));

button2.addEventListener("click", () => {
    let div = document.createElement("div");
    div.innerHTML = parseInt(5+6);
    document.body.appendChild(div);
})