import React from 'react';
import { render } from 'react-dom';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from './screens/login';
import homeScreen from './screens/home';
import cadastroScreen from './screens/cadastro';
import cadastroContatoScreen from './screens/cadastroContato'
import alteraContatoScreen from './screens/alteraContato'
import { initializeApp } from "firebase/app";

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="home">
            <Stack.Screen name="Login" component={loginScreen} 
              options={{title: 'Login'}}
            />
            <Stack.Screen name="Home" component={homeScreen} 
              options={{title: 'Welcome'}}
            />
            <Stack.Screen name="Cadastro" component={cadastroScreen} 
              options={{title: 'Cadastro'}}
            />
            <Stack.Screen name="CadastroContato" component={cadastroContatoScreen} 
              options={{title: 'Novo contato'}}
            />
            <Stack.Screen name="AlteraContato" component={alteraContatoScreen} 
              options={{title: 'Alterar contato'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

export default App;