/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useInterval from '../useInterval';
import {
  dealCards,
  intBoard,
  move,
  showBoard,
  User,
} from '../User/userService';
interface BoardUser {
  username: User;
  picture: File;
}
function Board() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [board, setBoard] = useState<intBoard>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [delay, setDelay] = useState<number>(1000);
  const [isPlaying, setPlaying] = useState<boolean>(true);

  // buscar board prro

  // useInterval(
  //   () => {
  //     console.log('fetching data');
  //     fetchData();
  //   },
  //   isPlaying ? delay : null
  // );
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // async function fetchData() {
  //   if (id !== undefined) {
  //     let board = await showBoard(parseInt(id));
  //     if (board !== undefined) {
  //       setBoard(board);
  //     }
  //   }
  // }
  // const makeMoveAction = (pos: number) => {
  //   if (id) {
  //   }

  //   fetchData();
  //   fetchData();
  // };
  // function action() {
  //   navigate('/gameoptions');
  //   setPlaying(false);
  // }

  function handleDeal() {
    dealCards(board?.id);
  }
  return (
    <>
      <div>Board</div>
      <button onClick={handleDeal}>Deal cards</button>
    </>
  );
}

export default Board;
