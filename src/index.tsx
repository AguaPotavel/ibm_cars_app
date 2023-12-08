import React from 'react';
import {useWindowDimensions} from 'react-native';

//hooks
import useAuth from './hooks/useAuth';

//screens
import Login from '@screens/Login';
import Cars from '@screens/Cars';
import CarDetails from '@screens/CarDetails';

//providers
import {ThemeProvider} from 'styled-components/native';
import theme from '@styles/theme';

//navigation
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

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
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </ThemeProvider>
  );
}
