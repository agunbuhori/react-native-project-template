import React, {FC, PropsWithChildren} from 'react';
import {Pressable} from 'react-native';
import type {
  StyleProp,
  ViewStyle,
  FlexAlignType,
  ColorValue,
  ViewProps,
  PressableProps,
} from 'react-native';

type Props = {
  m?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mx?: number;
  my?: number;
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  px?: number;
  py?: number;
  bg?: ColorValue;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  items?: FlexAlignType;
  centered?: boolean;
  row?: boolean;
};

const Box: FC<
  PropsWithChildren<Props & ViewProps & PressableProps>
> = props => {
  const customStyle: StyleProp<ViewStyle> = {
    margin: props.m,
    marginLeft: props.ml,
    marginTop: props.mt,
    marginRight: props.mr,
    marginBottom: props.mb,
    marginHorizontal: props.mx,
    marginVertical: props.my,
    padding: props.p,
    paddingLeft: props.pl,
    paddingRight: props.pr,
    paddingTop: props.pt,
    paddingBottom: props.pb,
    paddingHorizontal: props.px,
    paddingVertical: props.py,
    justifyContent: props.justify,
    alignItems: props.items,
    backgroundColor: props.bg,
  };

  if (props.centered) {
    customStyle.justifyContent = 'center';
    customStyle.alignItems = 'center';
  }

  if (props.row) {
    customStyle.flexDirection = 'row';
  }

  return (
    <Pressable {...props} style={[customStyle, props.style]}>
      {props.children}
    </Pressable>
  );
};

export default Box;
