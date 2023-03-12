import {Card, Layout, Text, Input, Button} from '@ui-kitten/components';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

export const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
            console.log(email);
            console.log(password);
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
