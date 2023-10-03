import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const sizes = {
  margin: 15,
  padding: 15,
  radius: 15,
  screenWidth: width,
  screenHeight: height,
};

export default sizes;
