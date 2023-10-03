import sizes from './sizes';

const {screenWidth, screenHeight} = sizes;

const metrics = {
  screenWidth: screenWidth < screenHeight ? screenWidth : screenHeight,
  screenHeight: screenWidth < screenHeight ? screenHeight : screenWidth,
};

export default metrics;
