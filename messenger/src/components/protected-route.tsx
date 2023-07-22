import { ReactNode } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebaseApp';
import { Navigate } from 'react-router';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const [user] = useAuthState(auth);

  console.log(user);

  if (!user) {
    return <Navigate to={'/signin'} />;
  }

  return children;
};
