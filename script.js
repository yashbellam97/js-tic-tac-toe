function playerFactory() {

}

const hello = "HE";

const gameBoard = (() => {
    const board = [];

    const addSymbol = (target, symbol) => {
        let position = target.id;
        if (!board[position]) {
            gameBoard[position] = symbol;
            target.textContent = symbol;
            makeInvalid(target);
        }
    }

    const makeInvalid = (target) => {
        target.classList.remove("valid");
    }

    return {board, addSymbol};
})();

const displayController = (() => {
    const intitializeGrid = () => {
        let gameContainer = document.querySelector("#game-container");
        gameContainer.innerHTML = "";
        for (let i = 0; i < 9; i++) {
            let item;
            let itemDiv = document.createElement("div");
            itemDiv.textContent = item;
            itemDiv.id = "" + i;
            itemDiv.classList.add("item", "valid");
            itemDiv.addEventListener("click", (event) => {
                gameBoard.addSymbol(event.target, "X")
            })
            gameContainer.appendChild(itemDiv);
        }
    }

    return {intitializeGrid};
})();

displayController.intitializeGrid();