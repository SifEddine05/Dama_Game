import React, { useState } from 'react';
import king from './assets/king.png'
var initialBoard = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [2, 0, 2, 0, 2, 0, 2, 0],
  [0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 2, 0, 2, 0]
];

const App = () => {
  const [board, setBoard] = useState(initialBoard);
  const [scoore1 ,setScoore1] = useState(0)
  const [scoore2 ,setScoore2] = useState(0)
  


  const [selectedPiece, setSelectedPiece] = useState(null);
  const [player,setPlayer] =useState(1);
  function Capture(board, startRow, startCol, endRow, endCol, player, isKing) {
    const rowDiff = Math.abs(endRow - startRow);
    const colDiff = Math.abs(endCol - startCol);
  
    if (endRow < 0 || endRow >= 8 || endCol < 0 || endCol >= 8) {
      return { canCapture: false, capturedPosition: null };
    }
  
    if (board[endRow][endCol] !== 0) {
      return { canCapture: false, capturedPosition: { row: endRow, col: endCol } };
    }
  
    if (isKing) {
      const rowStep = endRow > startRow ? 1 : -1;
      const colStep = endCol > startCol ? 1 : -1;
  
      let row = startRow + rowStep;
      let col = startCol + colStep;
  
      while (row !== endRow && col !== endCol) {
        if (board[row][col] !== 0) {
          return { canCapture: true, capturedPosition: { row, col } };
        }
        row += rowStep;
        col += colStep;
      }
    } else {
      if (rowDiff === 2 && colDiff === 2) {
        const middleRow = (startRow + endRow) / 2;
        const middleCol = (startCol + endCol) / 2;
        if (player === 1) {
          if (rowDiff <=2 && colDiff <=2  && endRow > startRow) {
            if (board[middleRow][middleCol] !== player && board[middleRow][middleCol] !== 0) {
              return { canCapture: true, capturedPosition: { row: middleRow, col: middleCol } };
            }
          }
        } else if (player === 2) {
          if (rowDiff <=2 && colDiff <=2  && endRow < startRow) {
            if (board[middleRow][middleCol] !== player && board[middleRow][middleCol] !== 0) {
              return { canCapture: true, capturedPosition: { row: middleRow, col: middleCol } };
            }          
          }
        }
       
      }
    }
  
    return { canCapture: false, capturedPosition: null };
  }
  
  
  

  function isValidMove(board, startRow, startCol, endRow, endCol, isKing, player) {
    if (endRow < 0 || endRow >= 8 || endCol < 0 || endCol >= 8) {
      return false;
    }
  
    const rowDiff = Math.abs(endRow - startRow);
    const colDiff = Math.abs(endCol - startCol);
  
    if (board[endRow][endCol] !== 0) {
      return false;
    }
  
    if (!isKing) {
      if (player === 1) {
        if (rowDiff === 1 && colDiff === 1 && endRow > startRow) {
          return true;
        }
      } else if (player === 2) {
        if (rowDiff === 1 && colDiff === 1 && endRow < startRow) {
          return true;
        }
      }
    } else {
      if (rowDiff === colDiff) {
        return true;
      }
    }
  
    return false;
  }
  

  function isKing(board, player, row) {
    if (player === 1 && row === 7) {
      return true;
    } else if (player === 2 && row === 0) {
      return true;
    }
    return false;
  }


  
  
  
  
const hanleClick1 = (e,coordinate,value)=>{

  if(player===2){
    alert('Player 2 turn')
  }
  else{
    const row = coordinate.row 
    const col = coordinate.col
    setSelectedPiece({ type:value,row, col });
  }
}
const hanleClick2 = (e,coordinate,value)=>{

  if(player===1)
  {
    alert('Player 1 turn')
  }
  else {
    const row = coordinate.row 
    const col = coordinate.col
    
    setSelectedPiece({  type:value,row, col });

  }
  
}


const handleResetGame =()=>{
  setBoard([
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0]
  ])
  setScoore1(0)
  setScoore2(0)
  setPlayer(1)
}
const hanleClick3 = (e,coordinate)=>{
  
  if(!selectedPiece){
    alert('Please Select a piece to move firstly')
  }
  else{
    const row1 = coordinate.row
    const col1 = coordinate.col
    const isking = selectedPiece.type===3 || selectedPiece.type === 4
    const { canCapture, capturedPosition } = Capture(board,selectedPiece.row,selectedPiece.col,row1,col1,player,isking)
    const newBoard = [...board];
    if(canCapture)
    {
      if(isKing(board,player,row1))
      {
            if(player===1)
            {
              newBoard[row1][col1] = 3;
              newBoard[capturedPosition.row][capturedPosition.col]=0 
              newBoard[selectedPiece.row][selectedPiece.col] =0 ;
              setBoard(newBoard);
              setScoore1(scoore1+1)
              setSelectedPiece(null);
              setPlayer(2)
             


            }
            else{
              newBoard[row1][col1] = 4;
              newBoard[capturedPosition.row][capturedPosition.col]=0 
              newBoard[selectedPiece.row][selectedPiece.col] =0 ;
              setScoore2(scoore2+1)
             
              setSelectedPiece(null);
              setPlayer(1)


            }
      }else{
            newBoard[row1][col1] = selectedPiece.type;
            newBoard[capturedPosition.row][capturedPosition.col]=0 
            newBoard[selectedPiece.row][selectedPiece.col] =0 ;
            setBoard(newBoard);
            setSelectedPiece(null);
            if (player===1) {
              setPlayer(2)
              setScoore1(scoore1+1)
              

            }
            else {
              setPlayer(1)
              setScoore2(scoore2+1)
              
            }

      }
     
     
      
      
    }
    else if(isValidMove(board,selectedPiece.row,selectedPiece.col,row1,col1,isking,player))
    {
          if(isKing(board,player,row1))
          {
            if(player===1)
            {
              newBoard[row1][col1] = 3;
            }
            else{
              newBoard[row1][col1] = 4;

            }
          }else{
            newBoard[row1][col1] = selectedPiece.type;

          }
          newBoard[selectedPiece.row][selectedPiece.col] =0 ;
          setBoard(newBoard);
          setSelectedPiece(null);
          if (player===1) setPlayer(2)
          else setPlayer(1)

    }
    else{
        alert('Invalid Move')
    }
  }
}

  const CheckerPiece = ({ color ,value ,coordinate }) => {
    return (
      <div className={`${color} h-16 w-16 p-2` }>
        {(color!=="bg-white" && value ===1 ) &&<div className='rounded-full bg-red-600 w-12 h-12 hover:cursor-pointer hover:drop-shadow-4xl'  onClick={(e)=>hanleClick1(e,coordinate,value)}></div>}
        {(color!=="bg-white" && value ===2 ) &&<div className='rounded-full bg-blue-600 w-12 h-12 hover:cursor-pointer hover:drop-shadow-4xl' onClick={(e)=>hanleClick2(e,coordinate,value)}></div>}
        {(color==="bg-black" && value===0) &&<div className='w-full h-full hover:cursor-pointer' onClick={(e)=>hanleClick3(e,coordinate)}></div>}
        {(color!=="bg-white" && value ===3 ) &&<div className='rounded-full bg-red-600 w-12 h-12 hover:cursor-pointer p-2 flex justify-center hover:drop-shadow-4xl items-center' onClick={(e)=>hanleClick1(e,coordinate,value)}><img src={king} alt='king' className='w-10'/> </div>}
        {(color!=="bg-white" && value ===4 ) &&<div className='rounded-full bg-blue-600 w-12 h-12 hover:cursor-pointer p-2 flex justify-centerhover:drop-shadow-4xl  items-center' onClick={(e)=>hanleClick2(e,coordinate,value)}><img src={king} alt='king' className='w-10'/></div>}


      </div>
    );
  };
  return (
    <div className="app flex flex-col justify-center items-center">
        <h1 className='text-[48px] font-bold text-center mb-4 text-white'>Dama Game</h1>
      <div className='md:grid md:grid-cols-3 flex flex-col md:items-start justify-center items-center px-8'>
          <div className='w-80 flex flex-col justify-center items-center'>
            <div className='rounded-lg bg-white p-4 text-center shadow-inner'>

              {player===1 && <h3 className='text-xl font-bold text-red-600'>{"Player 01 Turn (red)"}</h3> }
              {player===2 && <h3 className='text-xl font-bold text-blue-600'>{"Player 02 Turn (blue)"}</h3> }

            </div>
            <div className='rounded-lg bg-white p-4 text-center shadow-inner flex justify-center items-center mt-4 '>
              <div className='border-r-2 border-black'>
                <h3 className='text-xl font-bold text-black'>{"Player 01 Score "}</h3>
                <h3 className='text-xl font-bold text-red-600'>{scoore1}</h3>
              </div>
              <div className='border-l-2 border-black'>
                <h3 className='text-xl font-bold text-black'>{"Player 02 Score "}</h3>
                <h3 className='text-xl font-bold text-red-600'>{scoore2}</h3>
              </div>
              
            </div>
            <button onClick={handleResetGame} className='rounded-md bg-blue-600 text-lg font-semibold text-white p-2 mt-10'>Reset</button>          
          </div>
          {board && <div className="board grid grid-cols-8  border-2  w-fit border-white md:mt-0 mt-6">
              {board.map((row, rowIndex) => (
              row.map((elem, colIndex) => (
                <CheckerPiece key={colIndex} value={elem} coordinate={{row:rowIndex, col :colIndex}} color={rowIndex % 2 === colIndex % 2 ? 'bg-white' : 'bg-black'} />
              ))
          ))}
          </div>    }
      </div>

      {(scoore1 ===12 ||scoore2===12) && (
        <div className="absolute top-1/3 bg-blue-900 text-white p-4 text-[48px] font-bold flex flex-col justify-center items-center rounded-xl py-[50px]">
          {scoore1===12 && <h2>{"The Winner is the Player 1" }</h2>}
          {scoore2===12 && <h2>{"The Winner is the Player 2"}</h2>}

          <button onClick={handleResetGame} className='rounded-md bg-black text-xl p-2 mt-10'>Play Again</button>
        </div>
      )}
     
    </div>
  );
};

export default App;
