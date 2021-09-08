import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import {View, Text} from 'react-native';
import LogoImage from '../../assets/Logo.png';

import { Background, Container, Logo, AreaInput, Input, SubmitBtn, SubmitText, Link, LinkText } from './styles';

function Home(){
  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  // const { signIn, loadingAuth } = useContext(AuthContext);

  function handleLogin() {
    // signIn(email, password);
  }

  return (
    <Background>   
            
    </Background>
  );
};

export default Home;
