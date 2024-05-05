import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { showBoard } from '../User/userService';
import { joinBoard } from '../User/userService';

import '../stylesheet/JoinId.css';
import { useSessionUser } from '../Store/userStore';

function JoinId() {
  const [id, setid] = useState<number>();
  const user = useSessionUser();
  const navigate = useNavigate();

  async function handleForm(e: any) {
    if (!user) {
      return;
    }
    e.preventDefault();
    if (id) {
      let response = await joinBoard(id, user);
      if (response !== undefined) {
        navigate(`/Play/${response.board.id}`);
      }
    }
  }

  return (
    <div className='wrapperjoin'>
      <div className='contenedor'>
        <form onSubmit={(e: any) => handleForm(e)}>
          <input
            autoFocus
            type='text'
            autoComplete='off'
            value={id || ''}
            onChange={(e: any) => setid(e.target.value)}
            className='entradaid'
            placeholder='Plase type game ID'
          />
          <button type='submit' className='buttonid'>
            search
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinId;
