import React, {FC} from 'react';
import HomeScreen from '@/screens/HomeScreen';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import useTheme from '@/hooks/useTheme';
import useAuth from '@/hooks/useAuth';
import GuestScreen from '@/screens/GuestScreen';
import SurahScreen from '@/screens/SurahScreen';

export type RootStackParamList = {
  Guest: undefined;
  Surah: undefined;
  Home: undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> = FC<
  NativeStackScreenProps<RootStackParamList, T>
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigation = () => {
  const {theme} = useTheme();
  const auth = useAuth();

  if (auth.loading) {
    return <></>;
  }

  return (
    <NavigationContainer theme={theme === 'light' ? DefaultTheme : DarkTheme}>
      <Stack.Navigator>
        {!auth.token ? (
          <></>
        ) : (
          <>
            <Stack.Screen name="Surah" component={SurahScreen} />
            <Stack.Screen
              name="Guest"
              component={GuestScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigation;
