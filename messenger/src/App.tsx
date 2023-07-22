import { Route, Routes } from 'react-router';

import { Chat, NotFound, SignIn } from './views';
import { ProtectedRoute } from './components/protected-route';
import { Nav } from './components/nav';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <S.Wrapper>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    height: 100%;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 60px auto;
  `,
};

export default App;
