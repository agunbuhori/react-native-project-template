import React, {useEffect} from 'react';
import {Box, Typography} from '@/components/atoms';
import {Button, Wrapper} from '@/components/molecules';
import useTheme from '@/hooks/useTheme';
import FastImage from 'react-native-fast-image';
import sizes from '@/utils/theme/sizes';

const GuestScreen = () => {
  const {changeStatusBar} = useTheme();

  useEffect(() => {
    changeStatusBar('light-content');
  }, []);

  return (
    <Wrapper bg="black">
      <Box content="space-between" full>
        <Box gap={sizes.margin}>
          <Typography variant="h3" weight="bold" color="white">
            Assalāmualaikum!{'\n'}Selamat datang di Quran Tadabbur
          </Typography>
          <Typography variant="h6" weight="600" color="white">
            Belajar Al-Quran dengan tafsirnya dengan mudah dalam genggaman. Ayo
            manfaatkan waktumu untuk Al-Quran!
          </Typography>
        </Box>
        <Box items="center">
          <FastImage
            source={require('@/assets/images/quran.png')}
            style={{
              width: 240,
              height: 242,
            }}
          />
        </Box>
        <Button>Mulai</Button>
      </Box>
    </Wrapper>
  );
};

export default GuestScreen;
