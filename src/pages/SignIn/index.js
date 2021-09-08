import React, {useState} from 'react';
import { Platform, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/context/useAuth';

import {View, Text} from 'react-native';
import LogoImage from '../../assets/Logo.png';

import { Background, Container, Logo, AreaInput, Input, SubmitBtn, SubmitText, Link, LinkText } from './styles';

function SignIn(){
  const navigation = useNavigation();
	const { user } = useAuth();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

	console.log(user)

  function handleLogin() {
    // signIn(email, password);
  }

  return (
    <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : '' } enabled>
                <Logo source={require('../../assets/Logo.png')} />
                <AreaInput>
                    <Input
                        placeholder='E-mail'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder='Senha'
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </AreaInput>
                <SubmitBtn onPress={() => handleLogin()}>
                    <SubmitText>Entrar</SubmitText>
                </SubmitBtn>
                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>
            </Container>
        </Background>
  );
};

export default SignIn;
