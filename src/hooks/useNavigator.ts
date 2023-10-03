import {RootStackParamList} from '@/navigations/root-stack';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const useNavigator = <T extends keyof RootStackParamList>() => {
  const navigation = useNavigation<NavigationProp<RootStackParamList, T>>();

  return navigation;
};

export default useNavigator;
