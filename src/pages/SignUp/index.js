import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, ActivityIndicator } from 'react-native'
import { useAuth } from '../../hooks/context/useAuth'
import {View, Text} from 'react-native';
import LogoImage from '../../assets/Logo.png';

import { Background, Container, Logo, AreaInput, Input, SubmitBtn, SubmitText, Link, LinkText } from './styles';

function SignUp(){
  const navigation = useNavigation();
  const {signUp} = useAuth();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  function handleSignUp() {
    // console.log(name, email, password);
    signUp(name, email, password);
  }

  return (
    <Background>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : '' } enabled>
                <Logo source={require('../../assets/Logo.png')} />
                <AreaInput>
                    <Input
                        placeholder='Name'
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </AreaInput><AreaInput>
                    <Input 
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>
                <SubmitBtn onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitBtn>
                <Link onPress={() => navigation.navigate('SignIn')}>
                    <LinkText>Fazer login!</LinkText>
                </Link>
            </Container>
        </Background>
  );
};

export default SignUp;
