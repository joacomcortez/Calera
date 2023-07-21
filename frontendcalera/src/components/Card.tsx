/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

function Card(rank: number, suit: string) {
  const [number, setNumber] = useState<number>();
  const [type, setType] = useState<string>();
  function setBackground() {
    if (type === 'oro') {
      setType('../assets/orito.webp');
    }
    if (type === 'copa') {
      setType('../assets/copita.webp');
    }
    if (type === 'espada') {
      setType('../assets/espadita.webp');
    }
    if (type === 'basto') {
      setType('../assets/bastito.webp');
    }
  }
  function getRank(rank: number) {
    setNumber(5);
  }
  function getSuit(suit: string) {
    setType('basto');
    setBackground();
  }
  return (
    <div className='card-wrapper'>
      <div className='rank-topleft'>{number}</div>
      <img src={type} alt='' className='cardsuit' />
      <div className='rank-topright'>{number}</div>
    </div>
  );
}

export default Card;
