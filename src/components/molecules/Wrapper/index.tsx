import sizes from '@/utils/theme/sizes';
import React, {FC, PropsWithChildren} from 'react';
import {
  ColorValue,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  bg?: ColorValue;
};
const Wrapper: FC<PropsWithChildren<Props>> = ({children, bg}) => {
  const style: StyleProp<ViewStyle> = {
    backgroundColor: bg ?? 'transparent',
    flex: 1,
  };
  return (
    <SafeAreaView style={style}>
      <View style={styles.wrapper}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: sizes.padding,
    flex: 1,
  },
});

export default Wrapper;
