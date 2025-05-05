import {useState} from 'react'

const winningCombinations =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

function useTicTacToe() {

const[square,setSquare] = useState(Array(9).fill(null));

const[turn,setPlayerTurn]=useState(true);

const [winner,setWinner]=useState(null);

const handlesquareClick=(idx)=>{
    if(square[idx] || winner) return;
    const newSquare=[...square];
    newSquare[idx]= turn ? "X":"O";
    
    setSquare(newSquare);
    setPlayerTurn(t=>!t);

    const checkWinner=CalculateWinner(newSquare);
    if(checkWinner) {
        setWinner(checkWinner);
        alert("Congratulations, "+checkWinner+" wins the game" );
    };
}

const handleRestartGame=()=>{
    setSquare(Array(9).fill(null));
    setPlayerTurn(true);
    setWinner(null);
}

 const getStatusMessage = () => {
    if (winner) return `Player ${winner} wins!`;
    if (!square.includes(null)) return "It's a Draw!";
    return `Player ${turn ? 'X' : 'O'}'s Turn`;
  };

  return {square,handlesquareClick, turn, handleRestartGame,getStatusMessage,winner };   
}

const CalculateWinner=(square)=>{  
    for(let i=0;i<winningCombinations .length;i++){
        const [a,b,c]=winningCombinations [i];
        if (square[a] && square[a]===square[b] && square[a]===square[c])
            return square[a];
    }
    return null;
}

export default useTicTacToe