import { signInWithPopup } from 'firebase/auth';
import styled from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, googleAuthProvider } from '../firebaseApp';
import { Navigate } from 'react-router';

export const SignIn = () => {
  const [user] = useAuthState(auth);

  const handleSignIn = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };

  if (user) {
    return <Navigate to='/' />;
  }

  return (
    <S.Wrapper>
      <S.Button onClick={handleSignIn}>Sign-in with Google</S.Button>
    </S.Wrapper>
  );
};

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  `,
  Button: styled.button`
    font-size: 30px;
    padding: 30px;
    border-radius: 10px;
    border: none;
    transition: all 100ms ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
    }

    &:active {
      transform: scale(0.99);
    }
  `,
};
