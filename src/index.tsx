import React from 'react';
import {useWindowDimensions} from 'react-native';

//
import 'react-native-vector-icons/Ionicons';

//hooks
import useAuth from './hooks/useAuth';

//screens
import Login from '@screens/Login';
import Cars from '@screens/Cars';
import CarDetails from '@screens/CarDetails';
import CreateAuction from '@screens/CreateAuction';

//providers
import {ThemeProvider} from 'styled-components/native';
import theme from '@styles/theme';

//navigation
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// toast
import ToastManager from 'toastify-react-native';

const Stack = createStackNavigator();

export default function App() {
  const {isLogged} = useAuth();
  const dimensions = useWindowDimensions();

  return (
    <ThemeProvider theme={{...theme, dimensions}}>
      <NavigationContainer>
        {!isLogged ? (
          <Login />
        ) : (
          <Stack.Navigator initialRouteName="Carros">
            <Stack.Screen
              name="Carros"
              component={Cars}
              options={() => ({
                title: 'MacCarro',
              })}
            />
            <Stack.Screen
              name="Details"
              component={CarDetails}
              options={({route}: {route: any}) => ({
                title: route.params.car.name,
              })}
            />
            <Stack.Screen
              name="createAuction"
              component={CreateAuction}
              options={() => ({
                title: 'Criar Anúncio',
              })}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>

      <ToastManager height={72} position={'top'} hasBackdrop />
    </ThemeProvider>
  );
}
