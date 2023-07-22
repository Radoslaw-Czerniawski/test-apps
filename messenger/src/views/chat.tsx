import { useCollectionData } from 'react-firebase-hooks/firestore';

import {
  FieldValue,
  addDoc,
  collection,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { auth, db } from '../firebaseApp';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { Message } from '../components/message';
import { User } from 'firebase/auth';

export interface MessageField {
  text: string;
  uid: string;
  photoURL?: string;
  createdAt: FieldValue;
}

export const Chat = () => {
  const [formValue, setFormValue] = useState('');
  const wrapperRef = useRef<HTMLFormElement | null>(null);

  const [user] = useAuthState(auth);
  const queryRef = query(collection(db, 'messages'), orderBy('createdAt'), limit(25));
  const [messages] = useCollectionData(queryRef);

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user || formValue === '') {
      return;
    }

    const { uid, photoURL } = user;

    addDoc(collection(db, 'messages'), {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('');
  };

  useEffect(() => {
    wrapperRef.current?.scrollIntoView();

    return () => {};
  }, [messages]);

  return (
    <S.Wrapper>
      <S.MessagesWrapper>
        {messages ? (
          (messages as MessageField[]).map((msg: MessageField) => (
            <Message key={msg.uid + Math.random()} msg={msg} user={user as User} />
          ))
        ) : (
          <span>loading</span>
        )}
      </S.MessagesWrapper>

      <S.Form onSubmit={sendMessage} ref={wrapperRef}>
        <S.Input
          type='text'
          value={formValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFormValue(e.target.value)}
          placeholder='Send some messages :D'
          name='message'
        />

        <S.Button type='submit'>🙌</S.Button>
      </S.Form>
    </S.Wrapper>
  );
};
const S = {
  Wrapper: styled.div`
    display: grid;
    grid-template-rows: 1fr 100px;
    padding-top: 40px;
  `,

  MessagesWrapper: styled.div`
    display: flex;
    gap: 30px;
    overflow: auto;
    flex-direction: column;
    height: 100%;
  `,

  Form: styled.form`
    display: flex;
    justify-content: space-between;
    flex-shrink: 1;
    height: 100%;
  `,

  Input: styled.input`
    width: 100%;
    border: none;
    padding-left: 60px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: xx-large;
    &:focus {
      outline: none;
    }
  `,
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 30px;
    font-size: xx-large;
  `,
};
