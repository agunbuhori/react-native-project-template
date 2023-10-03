import React from 'react';
import {View} from 'react-native';
import {ScreenProps} from '@/navigations/root-stack';
import useScreenTitle from '@/hooks/useScreenTitle';
import useTheme from '@/hooks/useTheme';
import {Button} from '@/components/molecules';
import {Typography} from '@/components/atoms';

const HomeScreen: ScreenProps<'Home'> = () => {
  const {switchTheme} = useTheme();
  useScreenTitle('Hooooo');

  return <View></View>;
};

export default HomeScreen;
