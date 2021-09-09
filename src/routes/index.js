import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useAuth } from '../hooks/context/useAuth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
  const { signed, loading } = useAuth();
  console.log('signed', signed)

  if(loading){
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
            <ActivityIndicator size="large" color="131313"/>
        </View>
    )
    }
  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
