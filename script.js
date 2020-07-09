const gameBoard = (() => {
    let board = [];
    let currentSymbol = "x";

    let playerOneDiv = document.querySelector("#player-1-div");
    let playerTwoDiv = document.querySelector("#player-2-div");

    const addSymbol = (target) => {
        let position = target.id;
        if (!board[position]) {
            board[position] = currentSymbol;
            target.textContent = currentSymbol;
            currentSymbol = currentSymbol == "x" ? "o" : "x";
            if (currentSymbol == "x") {
                playerOneDiv.classList.add("current");
                playerTwoDiv.classList.remove("current");
            } else if (currentSymbol == "o") {
                playerOneDiv.classList.remove("current");
                playerTwoDiv.classList.add("current");
            }
            makeInvalid(target);
            let isGameOver = checkGameOver();
            if(isGameOver) clearBoard(isGameOver);
        }
    }

    const makeInvalid = (target) => {
        target.classList.remove("valid");
    }

    const checkGameOver = () => {
        let result;
        result = board[0] && board[1] && board[2];
        if (result && (board[0] === board[1] && board[0] === board[2])) return result;
        result = board[3] && board[4] && board[5];
        if (result && (board[3] === board[4] && board[3] === board[5])) return result;
        result = board[6] && board[7] && board[8];
        if (result && (board[6] === board[7] && board[6] === board[8])) return result;
        result = board[0] && board[3] && board[6];
        if (result && (board[0] === board[3] && board[0] === board[6])) return result;
        result = board[1] && board[4] && board[7];
        if (result && (board[1] === board[4] && board[1] === board[7])) return result;
        result = board[2] && board[5] && board[8];
        if (result && (board[2] === board[5] && board[2] === board[8])) return result;
        result = board[0] && board[4] && board[8];
        if (result && (board[0] === board[4] && board[0] === board[8])) return result;
        result = board[2] && board[4] && board[6];
        if (result && (board[2] === board[4] && board[2] === board[6])) return result;
        if (board[0] && board[1] && board[2] && board[3] && board[4] && board[5] && board[6] && board[7] && board[8]) return "tie";
        return null;
    }

    const clearBoard = (result) => {
        if (result === "x") alert("Player 1 wins");
        else if (result === "o") alert("Player 2 wins");
        else if (result === "tie") alert("It's a tie!");
        console.log(result);
        board = [];
        currentSymbol = "x";
        playerOneDiv.classList.add("current");
        playerTwoDiv.classList.remove("current");
        displayController.intitializeGrid();
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
                gameBoard.addSymbol(event.target)
            })
            gameContainer.appendChild(itemDiv);
        }
    }

    return {intitializeGrid};
})();

displayController.intitializeGrid();