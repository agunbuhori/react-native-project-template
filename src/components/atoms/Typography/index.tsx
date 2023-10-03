import useTheme from '@/hooks/useTheme';
import React, {FC, PropsWithChildren} from 'react';
import {
  ColorSchemeName,
  ColorValue,
  StyleProp,
  Text,
  TextStyle,
} from 'react-native';

type Variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small';
type Weights =
  | 'bold'
  | 'normal'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

type Props = {
  variant?: Variants;
  weight?: Weights;
  color?: ColorValue;
  darkColor?: ColorValue;
  lightColor?: ColorValue;
};

const Typography: FC<PropsWithChildren<Props>> = ({
  children,
  variant,
  weight,
  color,
  darkColor = 'white',
  lightColor = 'black',
}) => {
  const {theme} = useTheme();

  const fontStyle: StyleProp<TextStyle> = {
    fontSize: variant ? getFontSize(variant) : 12,
    fontWeight: weight,
    color: color ? color : getFontColor(theme, darkColor, lightColor),
    fontFamily: 'Helvetica',
  };

  return <Text style={fontStyle}>{children}</Text>;
};

const getFontSize = (variant: Variants): number => {
  const sizes: {[key: string]: number} = {
    h1: 40,
    h2: 36,
    h3: 28,
    h4: 22,
    h5: 18,
    h6: 16,
    body: 14,
    small: 12,
  };

  return sizes[variant];
};

const getFontColor = (
  theme: ColorSchemeName,
  darkColor: ColorValue,
  lightColor: ColorValue,
) => {
  return theme === 'dark' ? darkColor : lightColor;
};

export default Typography;
