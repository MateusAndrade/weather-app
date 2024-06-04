import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

const SunIcon = () => {
  const moveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(moveAnim, {
          toValue: -10,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.quad),
        }),
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.quad),
        }),
      ]),
    ).start();
  }, [moveAnim]);

  return (
    <Animated.Image
      source={require('../../../assets/icons/sun.png')}
      resizeMode="contain"
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 70,
        height: 70,
        transform: [{ translateY: moveAnim }],
        marginTop: 10,
      }}
    />
  );
};

export { SunIcon };
