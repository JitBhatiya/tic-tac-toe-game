let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trunO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        //trunO means trunO === ture
        if(trunO){
            box.innerText = "O";
            box.style.color = "red";
            trunO = false;
        }
        else{
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})
const reset = () => {
    trunO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (Winner) => {
    msg.innerText = `Congratulations , Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () =>{
    for(patten of winPatterns){

        let pos1Val = boxes[patten[0]].innerText;
        let pos2Val = boxes[patten[1]].innerText;
        let pos3Val = boxes[patten[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
        }
    }


}

resetBtn.addEventListener("click", reset);
newBtn.addEventListener("click", reset);

