import surahs, {Surah} from '@/assets/data/surahs';
import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import SurahItem from './elements/SurahItem';

const SurahScreen = () => {
  const keyExtractor = (_: any, index: number) => index.toString();

  const renderItem = useCallback(
    ({item}: {item: Surah}) => <SurahItem {...item} />,
    [surahs],
  );

  return (
    <FlatList
      data={surahs}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      initialNumToRender={15}
    />
  );
};

export default SurahScreen;
