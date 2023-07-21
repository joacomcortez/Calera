import React from 'react';
import { useNavigate } from 'react-router';
import { useSessionUser } from '../Store/userStore';
import '../stylesheet/CreateGame.css';
import { createBoard } from '../User/userService';

function CreateGame() {
  const user = useSessionUser();
  const navigate = useNavigate();
  async function handleCreateBoard() {
    if (user !== undefined) {
      let board = await createBoard();
      if (board !== undefined) {
        //setBoard(board);
        navigate(`/Play/${board?.id}`);
      }
    } else {
      navigate('/login');
    }
  }

  return (
    <div className='wrappercreate'>
      <button className='buttoncreate' onClick={handleCreateBoard}>
        Create Game
      </button>
    </div>
  );
}

export default CreateGame;
