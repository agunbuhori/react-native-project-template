import React, {FC, memo} from 'react';
import {Surah} from '@/assets/data/surahs';
import {Touchable, Typography} from '@/components/atoms';
import useNavigator from '@/hooks/useNavigator';

const SurahItem: FC<Surah> = ({name_simple, name_indonesian, id}) => {
  const navigator = useNavigator();

  return (
    <Touchable
      p={10}
      bg="white"
      onPress={() => {
        navigator.navigate('Home');
      }}>
      <Typography variant="h5" weight="bold">
        {id}. {name_simple}
      </Typography>
      <Typography variant="h6">{name_indonesian}</Typography>
    </Touchable>
  );
};

export default memo(SurahItem);
