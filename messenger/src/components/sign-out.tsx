import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseApp';
import styled from 'styled-components';

export const SignOut = () => {
  const [user] = useAuthState(auth);

  return user && <StyledButton onClick={() => auth.signOut()}>Sign Out</StyledButton>;
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-size: 18px;
  border-bottom-left-radius: 15px;
  border: none;
`;
