import styled from 'styled-components';
import { SignOut } from './sign-out';

export const Nav = () => {
  return (
    <S.Wrapper>
      <SignOut />
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: end;
  `,
};
