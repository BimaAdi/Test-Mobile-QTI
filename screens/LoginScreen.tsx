import {Card, Layout, Text, Input, Button} from '@ui-kitten/components';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useMutation} from '@tanstack/react-query';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {DrawerParamList} from '../navigators';
import {loginApi} from '../services/LoginApi';
import {ErrorType} from '../hooks/http';

type Props = NativeStackScreenProps<DrawerParamList, 'Login'>;

export const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = useMutation({
    mutationFn: loginApi,
    onSuccess: data => {
      console.log('success bro');
      console.log(data.data);
    },
    onError: (error: ErrorType<{message?: string; error?: string}>) => {
      console.log('error bro');
      console.log(error.response?.status);
      console.log(error.response?.data?.message);
    },
  });

  return (
    <Layout style={styles.center}>
      <Card style={styles.loginCard}>
        <Text category="h2" style={styles.loginText}>
          Login
        </Text>
        <Text style={styles.loginDesc}>
          Welcome back, enter your credentials to continue
        </Text>
        <Input
          style={styles.inputEmail}
          label="Email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Input
          style={styles.inputPassword}
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={value => setPassword(value)}
        />
        <Button
          style={styles.loginButton}
          onPress={() => {
            // navigation.navigate('ListUserScreen');
            // loginApi({email: 'admin@example.com', password: '12qwaszx'}).then(
            //   res => console.log(res.data),
            // );
            login.mutate({email, password});
          }}>
          Login
        </Button>
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCard: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  loginText: {textAlign: 'center'},
  loginDesc: {textAlign: 'center'},
  inputEmail: {marginTop: 10, marginBottom: 10},
  inputPassword: {marginTop: 10, marginBottom: 10},
  loginButton: {marginTop: 10, marginBottom: 10},
});
