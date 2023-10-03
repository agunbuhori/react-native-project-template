const useFlatList = <T>() => {
  const keyExtractor = (item: T, index: number) => {};
  const renderItem = ({item}: {item: T}) => {};

  return {
    renderItem,
    keyExtractor,
  };
};

export default useFlatList;
