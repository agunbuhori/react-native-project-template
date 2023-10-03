import sizes from '@/utils/theme/sizes';
import React, {FC, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

type Props = {
  visible: boolean;
};
const Loading: FC<Props> = ({visible}) => {
  if (!visible) {
    return <></>;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.lightBox}>
        <ActivityIndicator color="white" size="large" />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: sizes.screenWidth,
    height: sizes.screenHeight,
    top: 0,
    left: 0,
  },
  lightBox: {
    width: sizes.screenWidth / 2,
    height: sizes.screenWidth / 2,
    gap: sizes.padding,
    borderRadius: sizes.radius,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    color: 'white',
  },
});

export default Loading;
