import { User } from 'firebase/auth';
import styled from 'styled-components';

import { MessageField } from '../views';

interface MessageProps {
  user: User;
  msg: MessageField;
}

export const Message = ({ msg: { text, uid, photoURL }, user }: MessageProps) => {
  const messageClass = uid === user.uid ? 'sent' : 'received';

  return (
    <S.Wrapper $messageStyle={messageClass}>
      <S.Paragraph>{text}</S.Paragraph>
      <S.Img src={photoURL} alt='oww' />
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div<{ $messageStyle: 'sent' | 'received' }>`
    align-self: ${props => (props.$messageStyle === 'sent' ? 'flex-end' : 'flex-start')};
    flex-direction: ${props => (props.$messageStyle === 'sent' ? 'row' : 'row-reverse')};
    display: flex;
    align-items: center;
    gap: 20px;
    width: auto;
    padding: 0 10px;
  `,
  Paragraph: styled.p`
    min-width: 200px;
    border-radius: 25px;
    background: rgb(58, 58, 58);
    max-width: 500px;
    padding: 30px;
  `,
  Img: styled.img`
    height: 60px;
    border-radius: 40px;
  `,
};
