import {useEffect} from 'react';
import useNavigator from './useNavigator';

const useScreenTitle = (title: string) => {
  const navigator = useNavigator();

  useEffect(() => {
    navigator.setOptions({
      title,
    });
  }, [title]);
};

export default useScreenTitle;
