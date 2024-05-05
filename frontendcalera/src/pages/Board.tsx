/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useInterval from '../useInterval';
import '../stylesheet/Board.css';
import { useSessionUser } from '../Store/userStore';

import {
  dealCards,
  getCardsDealed,
  intBoard,
  move,
  playCard,
  showBoard,
  User,
} from '../User/userService';
interface BoardUser {
  username: User;
  picture: File;
}
interface intCard {
  rank: number;
  suit: string;
}
function Board() {
  const navigate = useNavigate();
  const { id } = useParams();
  // const [board, setBoard] = useState<intBoard>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [delay, setDelay] = useState<number>(1000);
  const [isPlaying, setPlaying] = useState<boolean>(true);
  const [board, setBoard] = useState<intBoard>();
  const [cards, setCards] = useState<string[]>([]);
  const [buttonCard, setButtonCard] = useState<intCard[]>([]);

  const user = useSessionUser();

  useEffect(() => {
    showBoardActual();
  }, []);

  async function showBoardActual() {
    if (!id) return;
    try {
      const response = await showBoard(id);
      setBoard(response);
    } catch (err: any) {
      console.log('error show board');
    }
  }

  function handleDeal() {
    if (!board) return;
    dealCards(board.id);
  }

  async function handleGetCards() {
    if (!board) return;
    if (!user) return;
    const currentCards = await getCardsDealed(board.id, user);
    console.log(currentCards);
    setCards(currentCards.cards);
  }

  function getRank(i: number) {
    const rank = cards[i].split('-');
    return rank[0];
  }

  function getSuit(i: number) {
    const suit = cards[i].split('-');
    return suit[1];
  }

  async function handlePlayCard(index: number) {
    if (!board) return;
    if (!user) return;
    playCard(board.id, cards[index], user);
  }

  return (
    <>
      <div className='boardContainer'>
        <div className='usersContainer'>
          {board?.boardusers[2] && (
            <div className='player3'> {board.boardusers[2].user.username} </div>
          )}

          {board?.boardusers[0] && board.boardusers[1] && (
            <div className='player12'>
              <div>{board.boardusers[0].user.username}</div>
              <button className='buttonDeal' onClick={() => handleDeal()}>
                Deal cards
              </button>
              <div>{board.boardusers[1].user.username}</div>
            </div>
          )}

          {board?.boardusers[3] && (
            <div className='player4'> {board.boardusers[3].user.username} </div>
          )}
        </div>

        <div className='buttonContainer'>
          <div className='cardsContainer'>
            {
              <>
                <button className='Card' onClick={() => handlePlayCard(0)}>
                  {cards[0] && (
                    <>
                      <div className='rank'>{getRank(0)}</div>
                      <div className='suit'>{getSuit(0)}</div>
                    </>
                  )}
                </button>
                <button className='Card' onClick={() => handlePlayCard(1)}>
                  {cards[1] && (
                    <>
                      <div className='rank'>{getRank(1)}</div>
                      <div className='suit'>{getSuit(1)}</div>
                    </>
                  )}
                </button>
                <button className='Card' onClick={() => handlePlayCard(2)}>
                  {cards[2] && (
                    <>
                      <div className='rank'>{getRank(2)}</div>
                      <div className='suit'>{getSuit(2)}</div>
                    </>
                  )}
                </button>
                <button className='Card' onClick={() => handlePlayCard(3)}>
                  {cards[3] && (
                    <>
                      <div className='rank'>{getRank(3)}</div>
                      <div className='suit'>{getSuit(3)}</div>
                    </>
                  )}
                </button>
                <button className='Card' onClick={() => handlePlayCard(4)}>
                  {cards[4] && (
                    <>
                      <div className='rank'>{getRank(4)}</div>
                      <div className='suit'>{getSuit(4)}</div>
                    </>
                  )}
                </button>
              </>
              // [
              // cards[0],
              // ' ',
              // cards[1],
              // ' ',
              // cards[2],
              // ' ',
              // cards[3],
              // ' ',
              // cards[4],
              // ]
            }
          </div>
          <button className='requestCards' onClick={() => handleGetCards()}>
            Get cards :)
          </button>
          <div className='idNumber'>
            <div> Board id:</div>
            <div>{id}</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Board;
