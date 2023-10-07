let divNumber = 16;

function setupSlider () {
    let slider = document.getElementById("div-number-slider");
    let sliderOutput = document.getElementById("slider-value");

    sliderOutput.innerHTML = slider.value;
    slider.oninput = function() {
        sliderOutput.innerHTML = this.value;
        divNumber = slider.value;
        drawSketchboard(divNumber);
        paintDivs();
    };
}

function clearContainer () {
    let container = document.getElementById("container");
    container.innerHTML = "";
}

function drawSketchboard(divNumberHandler) {
    const divRows = [];
    const divColumns = [];
    clearContainer();
    for (let i = 0; i < divNumberHandler; i++) {
        divRows[i] = document.getElementById("container").appendChild(document.createElement("div"));
        divRows[i].id = eval("'div-row-' + i");   
        divRows[i].className = "row";     
        for (let j = 0; j < divNumberHandler; j++) {
            divColumns[j] = document.getElementById(divRows[i].id).appendChild(document.createElement("div"));
            divColumns[j].id = eval("'div-column-' + j");
            divColumns[j].className = "column";    
        }
    }
}

function paintDivs() {
    let mouseDown = false;
    document.body.onmousedown = () => (mouseDown = true)
    document.body.onmouseup = () => (mouseDown = false)
    const divsHandler = document.querySelectorAll(".column");
    divsHandler.forEach(function(divsHandler) {
            divsHandler.addEventListener("mouseover", function() {
                if (mouseDown) {
                   divsHandler.style.backgroundColor = "black";
                }
            });             
            divsHandler.addEventListener("click", function(){divsHandler.style.backgroundColor = "black";})
    })
    
}

setupSlider();
drawSketchboard(divNumber);
paintDivs();


