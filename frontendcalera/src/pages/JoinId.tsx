import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showBoard } from '../User/userService';
import '../stylesheet/JoinId.css';

function JoinId() {
  const [id, setid] = useState<number>();
  const navigate = useNavigate();

  async function handleForm(e: any) {
    e.preventDefault();
    if (id) {
      let board = await showBoard(id);
      if (board !== undefined) {
        navigate(`/Play/${id}`);
      }
    }
  }

  return (
    <div className='wrapperjoin'>
      <div className='contenedor'>
        <form onSubmit={(e: any) => handleForm(e)}>
          <input
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
