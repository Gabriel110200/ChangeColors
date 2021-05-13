

function randColor() {

    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`;

}

const buttons = document.querySelectorAll("button");

function colorize() {

    this.style.backgroundColor = randColor();
    this.style.color = randColor();

}

for (let button of buttons) {
    button.addEventListener("click", colorize);


}

let h1s = document.querySelectorAll("h1");


for (h1 of h1s) {
    h1.addEventListener("click", colorize);
}