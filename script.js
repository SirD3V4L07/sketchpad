

function drawSketchboard() {
    const divRows = [];
    const divColumns = [];
    for (let i = 0; i < 16; i++) {
        divRows[i] = document.getElementById("container").appendChild(document.createElement("div"));
        divRows[i].id = eval("'div-row-' + i");   
        divRows[i].className = "row";     
        for (let j = 0; j < 16; j++) {
            divColumns[j] = document.getElementById(divRows[i].id).appendChild(document.createElement("div"));
            divColumns[j].id = eval("'div-column-' + j");
            divColumns[j].className = "column";    
        }
    }
}

drawSketchboard();

