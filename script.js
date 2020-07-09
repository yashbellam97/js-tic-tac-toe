function playerFactory() {

}

const hello = "HE";

const gameBoard = (() => {
    const board = [];

    const addSymbol = (target, symbol) => {
        let position = target.id;
        if (!board[position]) {
            board[position] = symbol;
            target.textContent = symbol;
            makeInvalid(target);
            if(checkGameOver()) console.log("YES");
        }
    }

    const makeInvalid = (target) => {
        target.classList.remove("valid");
    }

    const checkGameOver = () => {
        return (
            (board[0] && board[1] && board[2] && (board[0] === board[1] && board[0] === board[2]))
            || (board[3] && board[4] && board[5] && (board[3] === board[4] && board[3] === board[5]))
            || (board[6] && board[7] && board[8] && (board[6] === board[7] && board[6] === board[8]))
            || (board[0] && board[3] && board[6] && (board[0] === board[3] && board[0] === board[6]))
            || (board[1] && board[4] && board[7] && (board[1] === board[4] && board[1] === board[7]))
            || (board[2] && board[5] && board[8] && (board[2] === board[5] && board[2] === board[8]))
            || (board[0] && board[4] && board[8] && (board[0] === board[4] && board[0] === board[8]))
            || (board[2] && board[4] && board[6] && (board[2] === board[4] && board[2] === board[6])));
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