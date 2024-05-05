/* eslint-disable @typescript-eslint/no-unused-vars */
import { current } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSessionUser } from '../Store/userStore';

export interface User {
  username: string;
  id: number;
  url: string;
}

export interface Boarduser {
  id: number;
  cards: string[];
  cards_played: string[];
  score: number;
  user: User;
}

export interface intBoard {
  id: number;
  boardusers: Boarduser[];
}

export async function postLogin(
  username: string,
  password: string
): Promise<any | undefined> {
  let response;
  //let user;

  try {
    response = (
      await axios.post('http://localhost:3000/user/login', {
        username,
        password,
      })
    ).data as any;
  } catch (err: any) {}

  return response;
}

/*export function attachImage(username: string, picture: File) {
  let data = new FormData();

  data.append('picture', picture, picture.name);

  try {
    axios.post('http://localhost:3000/user/attach', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch (err: any) {
    console.log('error');
  }
}*/

export function createUser(username: string, password: string, picture?: File) {
  let data = new FormData();
  if (picture !== undefined) {
    data.append('image', picture, picture.name);
  }
  data.append('username', username);
  data.append('password', password);
  console.log(picture);
  try {
    axios.post('http://localhost:3000/user', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch (err: any) {
    console.log('error');
  }
}

export async function showUser(id: number | any) {
  let response;
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    response = (await axios.get(`http://localhost:3000/user/${id}`)).data
      .user as User;
  } catch (err: any) {
    console.log('error');
  }
}

interface Test {
  url: string;
}

export async function showImage(id: any): Promise<Test> {
  let response: Promise<Test> = await (
    await axios.get(`http://localhost:3000/user/${id}/show_image`)
  ).data;

  return response;
}

export async function createBoard(): Promise<intBoard | undefined> {
  let response;

  try {
    response = (await axios.post('http://localhost:3000/board')).data
      .board as intBoard;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // let positions = JSON.parse(response.array);
  } catch (err: any) {
    console.log('error');
  }
  return response;
}

export async function showBoard(id: number | string) {
  let response;
  try {
    response = (await axios.get(`http://localhost:3000/board/${id}`)).data
      .board as intBoard;
  } catch (err: any) {
    console.log('error show board');
  }

  return response;
}

export async function joinBoard(boardid: number, user: User) {
  try {
    return (
      await axios.post(`http://localhost:3000/board/${boardid}/join`, {
        user_id: user.id,
      })
    ).data;
  } catch (err: any) {
    console.log('error joining board');
  }
}

export async function playCard(boardid: number, card: string, user: User) {
  try {
    return (
      await axios.post(`http://localhost:3000/board/${boardid}/play_card`, {
        card,
        // user_id: user.id,
      })
    ).data;
  } catch (err: any) {
    console.log('error joining board');
  }
}

export async function dealCards(id: number) {
  try {
    axios.post(`http://localhost:3000/board/${id}/deal_cards`);
  } catch (err: any) {
    console.log('error dealing cards');
  }
}

export async function getCardsDealed(boardid: number, user: User) {
  try {
    return (
      await axios.get(`http://localhost:3000/board/${boardid}/cards_dealed`, {
        params: { user },
      })
    ).data;
  } catch (err: any) {
    console.log('error getting cards');
  }
}

export async function showIds() {
  let response: number[] | undefined;
  try {
    response = (await axios.get('http://localhost:3000/board/all/ids')).data;
  } catch (err: any) {
    console.log('error showing id list');
  }

  return response;
}

export async function move(position: number, id: number) {
  let response;
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    response = (
      await axios.post(`http://localhost:3000/board/${id}/move`, { position })
    ).data.board as intBoard;
  } catch (err: any) {
    console.log('error moving');
  }
}

export async function checkWinner(id: number) {
  try {
    await axios.get(`http://localhost:3000/board/${id}/checkwinner`);
  } catch (err: any) {
    console.log('error looking for a winner');
  }
}
export async function getWinner(id: number) {
  let response: string | undefined;
  try {
    response = await axios.get(`http://localhost:3000/board/${id}/getwinner`);
  } catch (err: any) {
    console.log('error get winner');
  }
  return response;
}
