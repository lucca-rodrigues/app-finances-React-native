import React from 'react';
import { useAuth } from '../hooks/context/useAuth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
  const { signed } = useAuth();

  console.log('signed', signed)
  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
