const element = document.getElementById("countdown");

let count = 0;
let start = true;

element.addEventListener("mouseover", () => {
    start = true;

    const counting = setInterval(() => {
        if (start) {
            count++;
            addCount(count);
        } else {
            clearInterval(counting);
        };
    }, 1500);
});

element.addEventListener("mouseout", () => {
    start = false;
});


function addCount (count) {
    let element = document.getElementById("countdown");

    if (count === 69) {
        element.innerHTML = "<span style=\"color: #44e17b\">69</span>"
    } else {
        element.innerText = count;
    };
};